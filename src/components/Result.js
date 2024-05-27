import React from "react";
import { Link } from "react-router-dom";
import question from "./Question";
 
const Result = ({ answer }) => {
  function giveResult() {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
      if (answer[i] === question[i].ans) cnt++;
    }
    return cnt;
  }
 
  return (
    // <div className="container welcome_box">
    //   <div className="score">
    //     <h2 className="score-text">Congratulations </h2>
    //     <p>you Scored {giveResult()} / 5</p>
    //     <Link to="/" style={{textDecoration:'none'}}>
    //     <button className="button-64 start" role="button" style={{ width: '60%' }} ><span class="text">Home</span></button>
    //     </Link>
    //   </div>
    // </div>

<div className="container welcome_box">

    <div class="end-screen ">
    <h1 class="heading">Congratulations</h1>
    <div class="score">
      <span class="score-text">Your score:</span>
      <div>
        <span class="final-score">{giveResult()}</span>
        <span class="total-score">/5</span>
      </div>
    </div>
    <Link to="/" style={{textDecoration:'none'}}>
       <button className="button-64 start" role="button" style={{ width: '60%' }} ><span class="text">Home</span></button>
    </Link>
  </div>
</div>
  );
};
 
export default Result;