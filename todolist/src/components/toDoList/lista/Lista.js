import React from "react";
import "./Lista.scss";

const Lista = ({ lista, deleteTask, updateTask }) => {
    return (
        <div className="Lista">
            {lista.map((task, index) => (
                <div key={index} className="task">
                    {task}
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}
                    >
                        Elimina
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Lista;
