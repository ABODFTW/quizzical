import parse from "html-react-parser";

export default function Option({
  option,
  index,
  q_index,
  onChangeHandler,
  answers,
}) {
  function getOptionStyle() {
    return [];
  }
  return (
    <span
      className={
        answers[`question-${q_index}`] === option
          ? "option-container rounded selected"
          : "option-container rounded"
      }
      onClick={(event) => onChangeHandler(event, q_index, option)}
    >
      <label htmlFor={`option-${index}`}>{parse(option)}</label>
    </span>
  );
}
