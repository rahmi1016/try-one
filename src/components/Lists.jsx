import React, { useState, useEffect, useRef } from "react";
import styles, { layout } from "./styles";
import circleLight from "../assets/circle-light.svg";
import circleDark from "../assets/circle-dark.svg";
import gradient from "../assets/gradient.svg";
import combi from "../assets/combi.svg";
import cross from "../assets/icon-cross.svg";
import Input from "./Input";
import Filter from "./Filter";

const Lists = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const [toggleAll, setToggleAll] = useState(true);
  const [toggleComp, setToggleComp] = useState(true);
  const [toggleAct, setToggleAct] = useState(true);

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [
        {
          id: 1,
          text: "Complete online JavaScript course",
          completed: true,
        },
        {
          id: 2,
          text: "Jog around the park 3x",
          completed: false,
        },
        {
          id: 3,
          text: "10 minutes meditation",
          completed: false,
        },
        {
          id: 4,
          text: "Read for 1 hour",
          completed: false,
        },
        {
          id: 5,
          text: "Pick up groceries",
          completed: false,
        },
        {
          id: 6,
          text: "Complete Todo App on Frontend Mentor",
          completed: false,
        },
      ];
    }
  });

  const [todo, setTodo] = useState("");

  const [itemsLeft, setItemsLeft] = useState(document.getElementsByClassName("false").length);

  const [displayAll, setDisplayAll] = useState(
    "text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue"
  );
  const [displayComplete, setDisplayComplete] = useState(
    "text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue"
  );
  const [displayActive, setDisplayActive] = useState(
    "text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue"
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setItemsLeft(document.getElementsByClassName("false").length);
  });

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copySetTodos = [...todos];
    const dragItemContent = copySetTodos[dragItem.current];
    copySetTodos.splice(dragItem.current, 1);
    copySetTodos.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodos(copySetTodos);
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmitInput = (e) => {
    e.preventDefault();
    if (todo != "") {
      setTodos([...todos, { id: new Date(), text: todo.trim(), completed: false }]);
    }
    setTodo("");
  };

  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(removeItem);
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleClear = () => {
    const activeItems = todos.filter((todo) => {
      return todo.completed === false;
    });
    setTodos(activeItems);
  };

  const handleCompleted = () => {
    setToggleComp(!toggleComp);
    if (toggleComp) {
      var completed = document.getElementsByClassName("true");
      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.remove("hidden");
      }
      var activeTodo = document.getElementsByClassName("false");
      for (let i = 0; i < activeTodo.length; i++) {
        activeTodo[i].classList.add("hidden");
      }
      setDisplayComplete("text-bright-blue");
      setDisplayAll("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayActive("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setToggleAll(true);
      setToggleAct(true);
    } else {
      var activeTodo = document.getElementsByClassName("false");
      for (let i = 0; i < activeTodo.length; i++) {
        activeTodo[i].classList.remove("hidden");
      }
      var completed = document.getElementsByClassName("true");
      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.remove("hidden");
      }
      setDisplayComplete("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayAll("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayActive("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setToggleAll(true);
      setToggleComp(true);
      setToggleAct(true);
    }
  };

  const handleActive = () => {
    setToggleAct(!toggleAct);
    if (toggleAct) {
      var activeTodo = document.getElementsByClassName("false");
      for (let i = 0; i < activeTodo.length; i++) {
        activeTodo[i].classList.remove("hidden");
      }
      var completed = document.getElementsByClassName("true");
      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.add("hidden");
      }
      setDisplayComplete("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayAll("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayActive("text-bright-blue");
      setToggleAll(true);
      setToggleComp(true);
    } else {
      var activeTodo = document.getElementsByClassName("false");
      for (let i = 0; i < activeTodo.length; i++) {
        activeTodo[i].classList.remove("hidden");
      }
      var completed = document.getElementsByClassName("true");
      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.remove("hidden");
      }
      setDisplayComplete("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayAll("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayActive("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setToggleAll(true);
      setToggleComp(true);
      setToggleAct(true);
    }
  };

  const handleAll = () => {
    setToggleAll(!toggleAll);
    if (toggleAll) {
      var activeTodo = document.getElementsByClassName("false");
      for (let i = 0; i < activeTodo.length; i++) {
        activeTodo[i].classList.remove("hidden");
      }
      var completed = document.getElementsByClassName("true");
      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.remove("hidden");
      }
      setDisplayComplete("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayAll("text-bright-blue");
      setDisplayActive("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setToggleComp(true);
      setToggleAct(true);
    } else {
      setDisplayComplete("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayAll("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setDisplayActive("text-darkish-grayish-blue hover:text-very-darkish-grayish-blue dark:hover:text-lightish-grayish-blue");
      setToggleAll(true);
      setToggleComp(true);
      setToggleAct(true);
    }
  };

  return (
    <>
      <Input todo={todo} onSubmitInput={handleSubmitInput} onInputChange={handleInputChange} />
      <ul>
        {todos.map((todo, index) => (
          <li
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            onDragOver={(e) => e.preventDefault()}
            className={`${layout.draggedItems} ${todo.completed} border-b-[0.2px] border-very-light-grayish-blue dark:border-very-dark-grayish-blue first:rounded-t-[6px] first:rounded-b-[0] group`}
            draggable="true"
            key={todo.id}
          >
            <div className={`flex items-center`}>
              <div className="dormant" onClick={() => toggleStatus(todo.id)}>
                <img src={circleLight} className={`${styles.circle} group-hover:hidden dark:hidden`} />
                <img src={circleDark} className={`dark:flex ${styles.circle} group-hover:hidden hidden `} />
                <img src={gradient} className={`${styles.circle} hidden group-hover:flex `} />
              </div>
              <div className="clicked" onClick={() => toggleStatus(todo.id)}>
                <img src={combi} className={`${styles.circle}`} />
              </div>
              <div onClick={() => toggleStatus(todo.id)} className="tulis text-[12px] sm:text-[16px]">
                {todo.text}
              </div>
            </div>
            <img src={cross} className={`sm:group-hover:flex sm:hidden sm:scale-90 scale-75`} onClick={() => handleDeleteClick(todo.id)} />
          </li>
        ))}
      </ul>

      <Filter
        itemsLeft={itemsLeft}
        onHandleClear={handleClear}
        onHandleAll={handleAll}
        displayAll={displayAll}
        onHandleActive={handleActive}
        displayActive={displayActive}
        onHandleCompleted={handleCompleted}
        displayComplete={displayComplete}
      />
    </>
  );
};

export default Lists;
