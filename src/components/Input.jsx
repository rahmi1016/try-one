import React from "react";
import styles, { layout } from "./styles";
import circleLight from "../assets/circle-light.svg";
import circleDark from "../assets/circle-dark.svg";
import gradient from "../assets/gradient.svg";

const Input = ({ onSubmitInput, onInputChange, todo }) => {
  return (
    <form className={`${layout.form} group`} onSubmit={onSubmitInput}>
      <img src={circleLight} className={`${styles.circle} group-hover:hidden dark:hidden`} />
      <img src={circleDark} className={`dark:flex ${styles.circle} group-hover:hidden hidden `} />
      <img src={gradient} className={`${styles.circle} hidden group-hover:flex`} />
      <input
        type="text"
        className={`${layout.input} ${styles.placeholder}`}
        placeholder="Create a new todo..."
        name="todo"
        value={todo}
        onChange={onInputChange}
      />
    </form>
  );
};

export default Input;
