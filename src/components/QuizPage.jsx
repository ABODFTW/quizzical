import React from "react";

import Question from "./QuestionElement";

export default function QuizPage(props) {
  const [questions, setQuestions] = React.useState([]);

  const [answers, setAnswers] = React.useState({});

  React.useEffect(() => {
    const response = fetch(
      "https://opentdb.com/api.php?amount=5&category=22&type=multiple"
    );
    response
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        setAnswers(() => {
          return questions.map((question, index) => ({
            [`question-${index}`]: "",
          }));
        });
      });
  }, []);

  function getOptions(item) {
    return [...item.incorrect_answers, item.correct_answer];
  }

  function onChangeHandler(event, q_index, option) {
    console.log("Clicked!");
    setAnswers((prevAnswers) => {
      return {
        ...prevAnswers,
        [`question-${q_index}`]: option,
      };
    });
    console.log(answers);
  }

  function checkAnswers() {}

  return (
    <div className="centered rounded">
      <h1 className="text-centered">Quizzical</h1>
      {questions.map((item, q_index) => (
        <Question
          item={item}
          q_index={q_index}
          key={q_index}
          getOptions={getOptions}
          onChangeHandler={onChangeHandler}
          answers={answers}
        />
      ))}
      <div className="btn-container">
        <button
          className="btn playagain-btn btn-primary rounded"
          onClick={checkAnswers}
        >
          Check answers
        </button>
      </div>
    </div>
  );
}
