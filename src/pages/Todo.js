import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const todoId = useRef(0);

    const onCreate = (todo) => {
        const newTodo = {
            todo,
            id: todoId.current
        };

        if(todo.length < 1) {
            alert('할 일이 입력되지 않았습니다!')
        }

        else {
            todoId.current += 1;
            setTodoList([newTodo, ...todoList]);
        }

    };

    const onRemove = (id) => {
        const filterTodo = todoList.filter((item) => item.id !== id);
        return setTodoList(filterTodo);
    };

    const onEdit = (todo, targetId) => {
        const editedTodo = todoList.map((item) => item.id === targetId ? {id: item.id, todo} : {...item});
        return setTodoList(editedTodo);
    }

    return (
        <div className='Todo basicStyle'>
            <Header text={'투두리스트'} />
            <div className='todoWrapper'>
                <form className='addTodo'>
                <input
                placeholder='할 일을 입력해주세요'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
                <button
                onClick={(e) => {

                    e.preventDefault();
                    onCreate(todo);
                    setTodo('');
                }}
                >추가</button>
                </form>

                <ul>
                    {todoList.map((item) => 
                        <TodoList
                        key={item.id}
                        id={item.id}
                        setTodo={setTodo}
                        todo={item.todo}
                        onRemove={onRemove}
                        onEdit={onEdit}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

