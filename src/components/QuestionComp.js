import React from "react";

const QuestionComp = ({ question, handleAnswer, selectedAnswer }) => {
  const { title, options, id } = question;
  return (
    <div className="question-wrapper">
      <div className="number">
        Question <span className="current">{id + 1}</span>
        <span className="total">/5</span>
      </div>
      <p className="question">{title}</p>
      <div className="answer-wrapper">
        {options.map((option, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name={`question-${id}`}
              id={`option-${id}-${index}`}
              checked={selectedAnswer === index}
              onChange={() => handleAnswer(id, index)}
              style={{ display: 'none' }} // Hide the radio input
            />
            <label
              htmlFor={`option-${id}-${index}`}
              className={`box answer ${selectedAnswer === index ? "selected" : ""}`}
            >
              <div className="course">
                <span className={`circle  ${selectedAnswer === index ? "selected" : ""}`} />
                <span className="subject">{option}</span>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuestionComp;
