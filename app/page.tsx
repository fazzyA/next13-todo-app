import React from 'react'
import AddTodo from './add-todo'
import TodoList from './todo-list'

const getTodos = async () => {
  let todos = await fetch("https://dummyjson.com/todos");
  return todos.json();
};

export default async function page() {
  const { todos } = await getTodos();
  return (
    <div>
      <div><AddTodo /></div>
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}
