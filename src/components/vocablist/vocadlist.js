import React, { useEffect, useState } from 'react';
import { db } from "../../FirebaseConfig";
import { collection, query, getDocs, orderBy, where } from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Toolbar, TableSortLabel } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';

const CustomTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'green',
  },
  '& .MuiTab-root': {
    color: 'green',
    '&.Mui-selected': {
      color: 'green',
    },
  },
});

const Vocablist = () => {
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [order, setOrder] = useState('asc');
  const [tabValue, setTabValue] = useState(0);
  const [collectionName, setCollectionName] = useState("NOM-FC");
  const [bottomNavValue, setBottomNavValue] = useState(1);

  // Setup Firebase authentication listener
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return unsubscribe; // Cleanup the subscription
  }, []);

  useEffect(() => {
    const fetchData = async (hskClass) => {
      if (currentUser) {
        const hskQuerySnapshot = await getDocs(query(collection(db, "HSK"), where("hskclass", "==", hskClass), orderBy("id")));
        const nomQuerySnapshot = await getDocs(query(collection(db, collectionName), where("userid", "==", currentUser.uid)));

        const nomData = nomQuerySnapshot.docs.reduce((acc, doc) => {
          acc[doc.data().id] = doc.data().state; // Map of id to state
          return acc;
        }, {});

        const list = hskQuerySnapshot.docs.map(doc => {
          const hskId = doc.data().id;
          return {
            id: hskId,
            chinese: doc.data().chinese,
            pinyin: doc.data().pinyin,
            japanese: doc.data().japanese,
            state: nomData[hskId] || '0' // Check if there's a matching NOM state, else '0'
          };
        });

        setData(list);
      }
    };

    fetchData(tabValue + 1);
  }, [currentUser, tabValue, collectionName]);

  const handleSortRequest = () => {
    const isAsc = order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    const sortedData = [...data].sort((a, b) => (isAsc ? b.state - a.state : a.state - b.state));
    setData(sortedData);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // ここでタブが変更されたときの処理を記述します
    console.log(`Tab changed to: ${newValue}`);
  };

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    if (newValue === 0) {
      setCollectionName("NOM-MCQ");
    } else if (newValue === 1) {
      setCollectionName("NOM-FC");
    }
  };

  return (
    <>
    <h1>単語リスト</h1>
      <BottomNavigation showLabels value={bottomNavValue} onChange={handleBottomNavChange}>
        <BottomNavigationAction
          label="四択問題"
          icon={<FormatListBulletedIcon />}
          style={{ color: bottomNavValue === 0 ? 'green' : 'inherit' }}
        />
        <BottomNavigationAction
          label="フラッシュカード"
          icon={<FilterNoneIcon />}
          style={{ color: bottomNavValue === 1 ? 'green' : 'inherit' }}
        />
      </BottomNavigation>
      <AppBar position="static" color="default">
        <CustomTabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="HSK1" />
          <Tab label="HSK2" />
          <Tab label="HSK3" />
          <Tab label="HSK4" />
          <Tab label="HSK5" />
          <Tab label="HSK6" />
        </CustomTabs>
      </AppBar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Toolbar>
                  <TableSortLabel
                    active={true}
                    direction={order}
                    onClick={handleSortRequest}
                  >
                    間違えた回数
                  </TableSortLabel>
                </Toolbar>
              </TableCell>
              <TableCell>中国語</TableCell>
              <TableCell>日本語</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.state}</TableCell>
                <TableCell>
                  <small>{item.pinyin}</small>
                  <br />
                  {item.chinese}
                </TableCell>
                <TableCell>{item.japanese}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Vocablist;
