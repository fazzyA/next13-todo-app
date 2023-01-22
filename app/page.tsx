import React from 'react'
import AddTodo from './add-todo'
import TodoList from './todo-list'

export default function page() {
  return (
    <div>
      <div><AddTodo /></div>
      <div>
        <TodoList />
      </div>
    </div>
  )
}
