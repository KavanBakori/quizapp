import React from "react";
import { Link } from "react-router-dom";
 
const Home = () => {
  return (
    <div className="container ">
      <div className="start-screen">
        <div className="settings">
        <p className="heading">Welcome to Quiz app</p>
        <Link to="/questions" style={{textDecoration:'none'}}>
        <button className="button-64 start"  role="button"><span class="text">Start Quiz</span></button>
        </Link>
        </div>
      </div>
    </div>
  ); 
};
 
export default Home;