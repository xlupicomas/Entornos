import React from "react";
import { Button } from "react-bootstrap";
function TodoItem({ content }: { content: String }) {
    return (
            <li>{content}</li>
    )}
export default TodoItem;