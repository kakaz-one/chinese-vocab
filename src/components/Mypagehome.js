import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../FirebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import { Box, Grid, Container, } from "@mui/material";
import Studygirl from "./images/shigureni-studygirl.png";
import "./Mypagehome.css";
import "../normalize.css";

const Mypagehome = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/`} />
          ) : (
            <Container maxWidth="md">
                <h1 className="title">中国語を勉強しよう！</h1>
                <img src={Studygirl} alt="studygirl"  />
                <p className="supplement">HSKは数ある中国語検定の中でも、中国政府公認の資格です</p>              <Box sx={{ mt: 4 }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={6} sm={6} md={6}>
                    <a href="/Hsk1MCQandFC" style={{ textDecoration: 'none' }}>
                      <Box className="hsk">
                      <div className="classstyle">HSK1級</div>                      
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <a href="/Hsk2MCQandFC" style={{ textDecoration: 'none' }}>
                    <Box className="hsk">
                      <div className="classstyle">HSK2級</div>                      
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <a href="/Hsk3MCQandFC" style={{ textDecoration: 'none' }}>
                    <Box className="hsk">
                      <div className="classstyle">HSK3級</div>                      
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <a href="/Hsk4MCQandFC" style={{ textDecoration: 'none' }}>
                    <Box className="hsk">
                      <div className="classstyle">HSK4級</div>                      
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <a href="/Hsk5MCQandFC" style={{ textDecoration: 'none' }}>
                    <Box className="hsk">
                      <div className="classstyle">HSK5級</div>                      
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <a href="/Hsk6MCQandFC" style={{ textDecoration: 'none' }}>
                    <Box className="hsk">
                      <div className="classstyle">HSK6級</div>                      
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <a href="/Vocablist" style={{ textDecoration: 'none' }}>
                    <Box className="hsk">
                      <div className="classstyle">単語リスト</div>                      
                      </Box>
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default Mypagehome;
