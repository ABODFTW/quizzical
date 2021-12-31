import parse from "html-react-parser";

export default function Option({
  option,
  index,
  q_index,
  onChangeHandler,
  userAnswers,
  correctAnswers,
  gameOver,
}) {
  function getOptionState() {
    let currentQuestion = `question-${q_index}`;
    const baseStyle = "option-container rounded";
    let states = ["correct", "incorrect", "disabled", "selected"];
    let isSelectedOption = option === userAnswers[currentQuestion];

    if (gameOver) {
      // If answer is correct
      if (
        isSelectedOption &&
        userAnswers[currentQuestion] ===
          correctAnswers[q_index][currentQuestion]
      ) {
        return `${baseStyle} ${states[0]}`;
      } else if (
        // If selected answer is Incorrect
        isSelectedOption &&
        userAnswers[currentQuestion] !==
          correctAnswers[q_index][currentQuestion]
      ) {
        return `${baseStyle} ${states[1]}`;
      } else {
        // Disable every other option
        return `${baseStyle} ${states[2]}`;
      }
    } else {
      if (userAnswers[currentQuestion] === option) {
        return `${baseStyle} ${states[3]}`;
      }
    }
    return baseStyle;
  }

  return (
    <span
      className={getOptionState()}
      onClick={(event) => onChangeHandler(event, q_index, option)}
    >
      <label htmlFor={`option-${index}`}>{parse(option)}</label>
    </span>
  );
}
