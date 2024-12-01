import React from 'react';

interface TodoItemProps {
    text: string;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onDelete }) => {
    return (
    <li>
        {text}
        <button onClick={onDelete}>
            Delete
        </button>
        </li>
    );
};

export default TodoItem;