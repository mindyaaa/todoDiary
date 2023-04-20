import React, { useState } from 'react';

export default function TodoList({id, todo, onRemove, onEdit}) {

    const [isEdit, setIsEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(todo);

    const handleRemove = () => {
        if(window.confirm(`할일 : ${todo}을/를 삭제하시겠습니까?`)) {
            return onRemove(id);
        }
    };

    const isEditToggle = () => {
        setIsEdit(!isEdit);
    }

    const quitEdit = () => {
        setIsEdit(false);
        setEditTodo(todo);
    }

    const handleEdit = () => {
        if(window.confirm('수정하시겠습니까?')) {
            isEditToggle();
            onEdit(editTodo, id);
        }
    };

    const handleChange = (e) => {
        setEditTodo(e.target.value);
    }

    return (
        <div className='TodoList'>
            <li>
                {isEdit ? 
                    <input
                    value={editTodo}
                    onChange={handleChange}
                    />
                : todo 
                }

                {isEdit ? 
                <>
                    <button
                        onClick={handleEdit}
                    >수정하기</button>
                    <button
                        onClick={quitEdit}
                    >수정취소</button>

                </> :
                <>
                    <button
                        onClick={handleRemove}
                    >삭제</button>
                    <button
                        onClick={isEditToggle}
                    >수정</button>
                </>
                }
            </li>
        </div>
    );
}

