import React from "react"; 
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: string[];
    onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo} onDelete={() => onDelete(index)} />
            ))}
        </ul>
    );
};

export default TodoList;