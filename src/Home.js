import React, { useState } from 'react';
import './Home.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Button } from 'react-bootstrap';

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        {todo.text} - Due: {todo.dueDate.toLocaleDateString()}
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo({ text, dueDate });
      setText('');
      setDueDate(new Date());
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Select due date"
        />
        <button type="submit">Add Todo</button>
      </form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Task Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your task has been added successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">React Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Home;
