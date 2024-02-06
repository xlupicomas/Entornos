import React from "react";
import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";
import { log } from "console";
function TodoList() {
    const [tasks, setTasks] = React.useState(["Tasca 1", "Tasca 2"]);

    const [valor, setValor] = React.useState("")

    function actualizarValor(e: React.FormEvent<HTMLInputElement>){
        setValor(e.currentTarget.value)
    }

    function addTask(texto: string) {
        if (valor == "") {
            console.log("esta vacio")
        }else{
            setTasks((currentTasks) => [...currentTasks, valor])
            setValor("")
        }
    }

    function removeElement(elemento:string) {
        setTasks(prevTasks => prevTasks.filter(item => item !== elemento))
    }
    return (
        <div>
            <h2>La Meva Llista de Tasques</h2>
            <input type="text" value={valor} onChange={actualizarValor}/>
            <Button variant="success" onClick={()=> addTask("aa")}>Añadir Tarea</Button>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} content={task} removeElement={removeElement}/>
                ))}
            </ul>
            
        </div>
        
    );
}
export default TodoList