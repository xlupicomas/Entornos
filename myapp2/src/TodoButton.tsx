import React from "react";
import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";

function TodoButton() {
    const [cont, setCont]


    function addTask(texto: string) {
        setTasks((currentTasks) => [...currentTasks, "Nueva Tarea"])
    }
    return (
        <div>
            <h2>La Meva Llista de Tasques</h2>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} content={task} />
                ))}
            </ul>
            <Button variant="success" onClick={()=> addTask("aa")}>Añadir Tarea</Button>
        </div>
    );
}