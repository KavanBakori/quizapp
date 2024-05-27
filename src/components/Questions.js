import React, { useState } from "react";
import QuestionComp from "./QuestionComp";
import question from "./Question";
import { Link } from "react-router-dom";

const Questions = ({ answer, setAnswer }) => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);

  const handleAnswer = (id, ans) => {
    let temp = [...answer];
    temp[id] = ans;
    setAnswer([...temp]);
  };

  const handleIncrement = () => {
    if (number === 4) {
      alert("This is the last question");
      setShow(false);
      return;
    }
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <div className="container">
      <div className="question-wrapper">
        <div className="number">
          <QuestionComp
            question={question[number]}
            selectedAnswer={answer[number]}
            handleAnswer={handleAnswer}
          />
          <div className="">
            {show ? (
              <div style={{ display: 'flex' }}>
                <button
                  className="button-64 start"
                  role="button"
                  style={{ width: '30%' }}
                  onClick={handleDecrement}
                >
                  <span className="text">Prev</span>
                </button>
                <button
                  className="button-64 start"
                  role="button"
                  style={{ width: '30%' }}
                  onClick={handleIncrement}
                >
                  <span className="text">Next</span>
                </button>
              </div>
            ) : (
              <Link to="/solution" style={{ textDecoration: 'none' }}>
                <button className="button-64 start" role="button" style={{ width: '60%' }}>
                  <span className="text">Submit</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
