"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheckSquare } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./add-todo";
import TodoList from "./todo-list";
interface TodoType {
    id: string;
    title: string;
    completed: boolean;
}
const TodoApp = () => {
//   const initialState = () => JSON.parse(localStorage.getItem("Tasks")) || [];
  const [tasks, setTasks] = useState<any[]>([{
    id: '0',
    title: '',
    completed: false,
  }]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewTask((prevState) => (prevState = value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask === "") return;
    if (!isEditing) {
      const newTaskArr = [
        ...tasks,
        { id: uuidv4(), title: newTask, completed: false }
      ];
      setTasks((prevState) => (prevState = newTaskArr));
      setNewTask("");
    } else {
      const newArr = tasks.slice();
      const indexArr = newArr.map((arr) => arr.id);
      const index = indexArr.indexOf(editId);
      newArr.splice(index, 1, { id: editId, title: newTask, completed: false });
      setTasks((prevState) => (prevState = newArr));
      setNewTask("");
      setEditId("");
      setIsEditing(false);
    }
  };

  const handleClear = () => {
    setTasks([]);
    // inputRef.current.focus();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTask("");
    setEditId("");
    // inputRef.current.focus();
  };

  const handleDelete = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const item = tasks.find((task) => task.id === id);
    setNewTask(item.title);
    setIsEditing(true);
    setEditId(item.id);
    // inputRef.current.focus();
  };

  const handleCheck = (title, id) => {
    if (tasks.find((task) => task.id === id).completed) {
        // if (tasks && tasks.length && tasks.find((task) => task.id === id).completed) {
      const newArr = tasks.slice();
      const indexArr = newArr.map((arr) => arr.id);
      const index = indexArr.indexOf(id);
      newArr.splice(index, 1, { id, title, completed: false });
      setTasks((prevState) => (prevState = newArr));
    } else {
      const newArr = tasks.slice();
      const indexArr = newArr.map((arr) => arr.id);
      const index = indexArr.indexOf(id);
      newArr.splice(index, 1, { id, title, completed: true });
      setTasks((prevState) => (prevState = newArr));
    }
  };

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  const liStyle = {
    textDecoration: "line-through",
    fontWeight: "100",
    fontStyle: "italic"
  };
  const TaskLists = tasks.map((task) => {
    return (
      <li
        className="list"
        style={task.completed ? liStyle : { textDecoration: "none" }}
        key={task.id}
      >
        {task.title}
        <div>
          <Button
            title="Delete"
            variant="link"
            className="border rounded "
            onClick={() => handleDelete(task.id)}
          >
           <AiOutlineDelete fill="red" />
          </Button>
          <Button
            title="Edit"
            variant="link"
            className="border rounded "
            onClick={() => handleEdit(task.id)}
          >
            <AiOutlineEdit fill="blue"  />
          </Button>
          <Button
            title="Complete"
            variant="link"
            className="border rounded "
            onClick={() => handleCheck(task.title, task.id)}
          >
            <AiOutlineCheckSquare fill="green" />
          </Button>
        </div>
      </li>
    );
  });
  return (
    <div className="TodoApp">
      <div className="todoapp_child">
        <TodoForm
          onSubmit={handleSubmit}
          value={newTask}
          onChange={handleChange}
          onClick={!isEditing ? handleClear : handleCancel}
          isEditing={isEditing}
          reference={inputRef}
        />
        <TodoList>
          {tasks.length > 0 ? (
            TaskLists
          ) : (
            <span className="no-task">
              <i className="fas fa-tasks" />
              <span className="no-task-p">Add Tasks</span>
            </span>
          )}
        </TodoList>
      </div>
    </div>
  );
};

export default TodoApp;
