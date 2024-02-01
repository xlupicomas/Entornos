import React from "react";
import TodoItem from "./TodoItem";
function TodoList() {
    const [tasks, setTasks] = React.useState(["Tasca 1", "Tasca 2"]);
    
    return(
        <div>
            <h2>La Meva Llista de Tasques</h2>
            <ul>
            {tasks.map((task, index) => (
                <TodoItem key={index} content={task} />
                // <li key={index}>(task)</li>
            ))}
            </ul>
        </div>
    );
}
export default TodoList