import React, { useEffect, useState, memo } from "react";
import { getQuestions } from "../services/questionService";

export default memo(function Questionaire() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const answeredQuestions = [];

  useEffect(() => {
    if (questions.length === 0) {
      (async () => {
        const result = await getQuestions();
        setQuestions(result);
        setCurrentQuestion(result[0]);
      })();
    }
  }, []);

  const handleAnswer = (value) => {
    answeredQuestions.push(Object.assign({}, currentQuestion, { answer: value }));;

    const questionsIndex = questions.findIndex(
      (item) =>
        item.category === currentQuestion.category &&
        item.question === currentQuestion.question
    );

    if (questions.length - 1 > questionsIndex) {
      setCurrentQuestion(questions[questionsIndex + 1]);
    } else {
      // End of questions
    }
  };

  return (
    <>
      <div className="page-title-questionaire">
        <img alt="Zeniark Logo" src={require("../images/logo.png")} />
        <h1>Category: {currentQuestion.category}</h1>
        <h3>
          {answeredQuestions.length + 1} of {questions.length}
        </h3>
      </div>
      <div className="page-body-questionaire">
        <h1 dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></h1>
      </div>
      <div className="page-control-questionaire">
        <button
          style={{ backgroundColor: "#4FBD1B" }}
          type="button"
          onClick={() => handleAnswer(true)}
        >
          ✓ True
        </button>
        <button
          style={{ backgroundColor: "#E04E10" }}
          onClick={() => handleAnswer(false)}
        >
          ✕ False
        </button>
      </div>
    </>
  );
})
