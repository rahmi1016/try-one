import React from "react";
import styles, { layout } from "./styles";

const Filter = ({ itemsLeft, onHandleClear, onHandleAll, displayAll, onHandleCompleted, displayComplete, onHandleActive, displayActive }) => {
  return (
    <>
      <div className="sm:hidden ">
        <div className={`${layout.listEnd}`}>
          <div className={`${styles.footerText}`}>{itemsLeft} items left</div>
          <div className={`${styles.footerText}`} onClick={onHandleClear}>
            Clear Completed
          </div>
        </div>
        <div className={`${layout.filter}`}>
          <div onClick={onHandleAll} className={displayAll} id="allMob">
            All
          </div>
          <div onClick={onHandleActive} className={displayActive} id="activeMob">
            Active
          </div>
          <div onClick={onHandleCompleted} className={displayComplete} id="compMob">
            Completed
          </div>
        </div>
      </div>
      <div className={`${layout.desktop} hidden sm:flex`}>
        <div className={`${styles.footerText}`}>{itemsLeft} items left</div>
        <div className={`${layout.filterDesk}`}>
          <div onClick={onHandleAll} className={displayAll} id="allDesk">
            All
          </div>
          <div onClick={onHandleActive} className={displayActive} id="activeDesk">
            Active
          </div>
          <div onClick={onHandleCompleted} className={displayComplete} id="compDesk">
            Completed
          </div>
        </div>
        <div className={`${styles.footerText}`} onClick={onHandleClear}>
          Clear Completed
        </div>
      </div>
    </>
  );
};

export default Filter;
