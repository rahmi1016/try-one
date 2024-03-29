const styles = {
  circle: "w-[22px] h-[22px] mr-4",
  cross: "w-[1.125rem] h-[1.125rem] flex justify-self-end scale-[0.6]",
  line: "w-[320px] sm:w-[540px] h-[50px] sm:h-16",
  background: "bg-mobile-light dark:bg-mobile-dark sm:bg-desktop-light dark:sm:bg-desktop-dark bg-no-repeat bg-top",
  headerTop: "mt-[30px] sm:mt-[60px]",
  headerBottom: "mb-[30px] sm:mb-[30px]",
  brandFontSize: "text-2xl sm:text-[2rem]",
  flexBetween: "flex items-center justify-between",
  flexStart: "flex flex-row items-center justify-start",
  flexCenter: "flex flex-row items-center justify-center",
  padding: "px-4 sm:px-[24px]",
  radiusTop: "rounded-t-[6px] rounded-b-[0]",
  radiusBottom: "rounded-t-[0] rounded-b-[6px]",
  radiusFull: "rounded-[6px]",
  toggleMode: "bg-very-light-gray text-very-darkish-grayish-blue dark:bg-very-dark-desaturated-blue dark:text-lightish-grayish-blue",
  placeholder: "placeholder: text-m placeholder:text-darkish-grayish-blue focus:outline-none placeholder:bg-transparent",
  footerText: "text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue",
};

export const layout = {
  header: `${styles.line} ${styles.flexBetween} ${styles.headerTop} ${styles.headerBottom}`,
  form: `${styles.flexStart} ${styles.line} pl-4 sm:pl-[24px] rounded-[6px] border-box ${styles.toggleMode} mb-4 sm:mb-6`,
  input: `h-[50px] sm:h-16 border-none text-s bg-very-light-gray text-very-dark-desaturated-blue dark:bg-very-dark-desaturated-blue dark:text-very-light-grayish-blue w-[80%] text-[10px] sm:text-[16px]`,
  draggedItems: `${styles.line} ${styles.padding} ${styles.flexBetween} cursor-pointer  ${styles.toggleMode} text-[10px] sm:text-[16px]`,
  listEnd: `${styles.flexBetween} flex-row ${styles.line} ${styles.radiusBottom} ${styles.toggleMode} ${styles.padding} mb-4  cursor-pointer text-xs`,
  filter: `${styles.flexCenter} ${styles.toggleMode} gap-4 text-bold cursor-pointer ${styles.line} text-sm ${styles.footerText} mb-[40px] ${styles.radiusFull}`,
  desktop: `${styles.flexBetween} ${styles.toggleMode} ${styles.line} bg-very-light-gray ${styles.padding} ${styles.radiusBottom}  mb-[50px] cursor-pointer`,
  filterDesk: `flex flex-row gap-[10px] text-bold`,
};

export default styles;

// grid grid-columns-[24px_0_auto_24px] sm:grid-columns-[40px_0_auto_40px]
