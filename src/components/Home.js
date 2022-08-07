import React, { useState } from "react";
import AddTodo from "./AddTodo";
import DisplayTodoList from "./DisplayTodoList";
import _ from "lodash";

const Home = () => {
  const [valueInput, setValueInput] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: 1, name: "watching youtube" },
    { id: 2, name: "watching facebook" },
    { id: 3, name: "reading book" },
  ]);

  const randomIntFromInterval = (min, max) => {
    let idNew;
    let arrayId = [];
    listTodo.forEach((item) => arrayId.push(item.id)); 
    while (true) {
      idNew = Math.floor(Math.random() * (max - min + 1) + min);
      if (!arrayId.includes(idNew)) {
        break;
      }
    }
    return idNew;
  };

  const handleClickBtn = (event) => {
    event.preventDefault();
    const idNewValue = randomIntFromInterval(1, 8);
    let newValue = { id: idNewValue, name: valueInput };
    setListTodo([...listTodo, newValue]);
    setValueInput("");
  };

  const handleDelete = (id) => {
    console.log("id in parent : ", id);
    let currentTodoList = _.clone(listTodo);
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListTodo(currentTodoList);
  };
  return (
    <div>
      <AddTodo
        toDo={valueInput}
        setTodo={setValueInput}
        handleClickBtn={handleClickBtn}
      />

      <h1>------List to do-----</h1>

      <DisplayTodoList
        childrenData={listTodo}
        deleteTodoInParent={handleDelete}
      />
    </div>
  );
};
export default Home;
