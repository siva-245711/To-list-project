import './Css/Todo.css';
import { useState, useRef, useEffect } from 'react';
import Todoitems from './Todoitems';
let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos, { no: count++, text: inputRef.current.value, display: " " }]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);

    // Trigger background pulse animation
    const todoElement = document.querySelector('.todo');
    todoElement.style.animation = 'none'; // Reset animation
    setTimeout(() => {
      todoElement.style.animation = ''; // Reapply animation
    }, 10);
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  useEffect(() => {
    const todoList = document.querySelector('.todo-list');
    todoList.scrollTo({
      top: todoList.scrollHeight,
      behavior: 'smooth'
    });
  }, [todos]);

  return (
    <div className='todo'>
      <div className="todo-header">TO-DO-LIST</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
        <div onClick={add} className='todo-add-btn'>ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return <Todoitems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />;
        })}
      </div>
    </div>
  );
}

export default Todo;
