import parse from "html-react-parser";

import Option from "./OptionElement";

export default function Question({
  item,
  q_index,
  getOptions,
  onChangeHandler,
  answers,
}) {
  return (
    <div className="questions-container">
      <h2 className="question">{item.question}</h2>
      <div className="options-container">
        {getOptions(item).map((option, index) => {
          return (
            <Option
              option={option}
              index={index}
              q_index={q_index}
              onChangeHandler={onChangeHandler}
              answers={answers}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
