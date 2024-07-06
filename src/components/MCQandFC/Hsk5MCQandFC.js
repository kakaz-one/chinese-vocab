import React from 'react'
import "./HskMCQandFC.css";
import Pcgirl from "../images/shigureni-pcgirl.png";
import Stack from '@mui/material/Stack';

const Hsk5MCQandFC = () => {
  return (
    <>
                <h1 className="title">HSK5級</h1>
                <img src={Pcgirl} alt="pcgirl"  />

                <div className="bodywholeMCQandFC">
                  <Stack direction="row" spacing={4}>
                  <a href="/Hsk5MCQ">
                    <div className="hsk">
                      <div className="classstyle">四択問題</div>
                    </div>
                  </a>
                  <a href="/Hsk5FC">
                    <div className="hsk">
                      <div className="classstyle">フラッシュカード</div>
                    </div>
                  </a>
                  </Stack>
                  </div>

    </>
  )
}

export default Hsk5MCQandFC