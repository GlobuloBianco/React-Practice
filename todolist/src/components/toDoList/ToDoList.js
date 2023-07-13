import React, { useState } from "react";
import Header from "../header/Header";
import Input from "./input/Input";
import Lista from "./lista/Lista";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const addTask = (task) => {
        setTodoList([...todoList, task]);
    };

    const deleteTask = (index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };

    const updateTask = (index, updatedTask) => {
        const newTodoList = [...todoList];
        newTodoList[index] = updatedTask;
        setTodoList(newTodoList);
    };

    return (
        <div className="TodoList">
            <Input lista={todoList} addTask={addTask} />
            <Lista
                lista={todoList}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />
        </div>
    );
};

export default TodoList;
