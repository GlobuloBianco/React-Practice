import React, { useState } from "react";
import "./Input.scss";
import { BsPlusCircle } from "react-icons/bs";

const Input = ({ lista, setLista }) => {
    const [inputValue, setInputValue] = useState("");

    const saveList = (lista) => {
        window.sessionStorage.setItem("lista", JSON.stringify(lista));
    };

    const loadList = () => {
        const todoListString = window.sessionStorage.getItem("lista");
        return JSON.parse(todoListString) || [];
    };

    const add = () => {
        const newList = [...lista, inputValue];
        setLista(newList);
        saveList(newList);
        setInputValue("");
    };
    return (
        <div className="d-flex justify-content-center">
            <input
                type="text"
                className="input"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button
                className="button d-flex align-items-center justify-content-center"
                onClick={() => add()}
            >
                <BsPlusCircle />
            </button>
        </div>
    );
};

export default Input;
