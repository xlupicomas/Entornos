import React from "react";
import { Button } from "react-bootstrap";
function TodoItem({ content, removeElement } : { content: string, removeElement: (elemento: string) => void }) {

    
    return (
        <div className="liContenedor">
            <li>{content}</li>
            <i className="borrar" onClick={() => removeElement(content) }>X</i>
        </div>
    )
}

export default TodoItem;