import parse from "html-react-parser";
import Option from "./OptionElement";

export default function Question({
  item,
  q_index,
  getOptions,
  correctAnswers,
  onChangeHandler,
  userAnswers,
  gameOver,
}) {
  return (
    <div className="questions-container">
      <h2 className="question">{parse(item.question)}</h2>
      <div className="options-container">
        {getOptions(item).map((option, index) => {
          return (
            <Option
              option={option}
              index={index}
              q_index={q_index}
              onChangeHandler={onChangeHandler}
              userAnswers={userAnswers}
              correctAnswers={correctAnswers}
              gameOver={gameOver}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
