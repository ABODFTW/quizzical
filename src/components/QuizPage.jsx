/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import Question from "./QuestionElement";

export default function QuizPage() {
  const [gameOver, setGameOver] = React.useState(false);

  const [questions, setQuestions] = React.useState([]);

  const [userAnswers, setUserAnswers] = React.useState({});

  const [correctAnswers, setCorrectAnswers] = React.useState({});

  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    loadQuestions();
  }, []);

  function loadQuestions() {
    const response = fetch(
      "https://opentdb.com/api.php?amount=5&category=22&type=multiple"
    );
    response
      .then((res) => res.json())
      .then((data) => {
        // Reset game
        setGameOver(false);
        // Reset selected option
        setUserAnswers({});
        // Reset score
        setScore(0);
        // Setting questions
        setQuestions(data.results);
        // Setting correct answers
        setCorrectAnswers(
          data.results.map((question, index) => ({
            [`question-${index}`]: question.correct_answer,
          }))
        );
      });
  }

  function getOptions(item) {
    return [...item.incorrect_answers, item.correct_answer];
  }

  function onChangeHandler(event, q_index, option) {
    if (!gameOver) {
      setUserAnswers((prevAnswers) => {
        return {
          ...prevAnswers,
          [`question-${q_index}`]: option,
        };
      });
    }
  }

  // Checks answers and ends the game
  function checkAnswers() {
    questions.map((question, index) => {
      if (userAnswers[`question-${index}`] === question.correct_answer) {
        setScore((prev) => (prev += 1));
      }
      return false;
    });
    setGameOver(true);
  }

  return (
    <div className="centered rounded">
      <h1 className="text-centered">Quizzical</h1>
      {questions.map((item, q_index) => (
        <Question
          item={item}
          q_index={q_index}
          key={q_index}
          getOptions={getOptions}
          userAnswers={userAnswers}
          onChangeHandler={onChangeHandler}
          correctAnswers={correctAnswers}
          gameOver={gameOver}
        />
      ))}
      {!gameOver && (
        <div className="btn-container">
          <button
            className="btn check-btn btn-primary rounded"
            onClick={checkAnswers}
          >
            Check answers
          </button>
        </div>
      )}
      {gameOver && (
        <div className="btn-container">
          <h3 className="score">You scored {score}/5 correct answers</h3>
          <button
            className="btn playagain-btn btn-primary rounded"
            onClick={loadQuestions}
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
