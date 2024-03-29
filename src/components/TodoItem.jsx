import React from "react";
import styles from "./styles";
import circleLight from "../assets/circle-light.svg";
import circleDark from "../assets/circle-dark.svg";
import gradient from "../assets/gradient.svg";
import combi from "../assets/combi.svg";
import cross from "../assets/icon-cross.svg";

const TodoItem = (onToggleStatus, onHandleDeleteClick, daftar, sente) => {
  return (
    <>
      <div className={`flex items-center`}>
        <div className="dormant" onClick={() => onToggleStatus(daftar)}>
          <img src={circleLight} className={`${styles.circle} group-hover:hidden dark:hidden`} />
          <img src={circleDark} className={`dark:flex ${styles.circle} group-hover:hidden hidden `} />
          <img src={gradient} className={`${styles.circle} hidden group-hover:flex `} />
        </div>
        <div className="clicked" onClick={() => onToggleStatus(daftar)}>
          <img src={combi} className={`${styles.circle}`} />
        </div>
        <div onClick={() => onToggleStatus(daftar)} className="tulis text-[12px] sm:text-[16px]">
          {sente}
        </div>
      </div>
      <img src={cross} className={`sm:group-hover:flex sm:hidden sm:scale-90 scale-75`} onClick={() => onHandleDeleteClick(daftar)} />
    </>
  );
};

export default TodoItem;
