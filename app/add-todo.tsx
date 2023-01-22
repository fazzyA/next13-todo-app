"use client";
import { useState } from "react";

async function addTodo(todo: string) {
    fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo,
          completed: false,
          userId: 5,
        })
      })  
  }
export default function AddTodo() {
    let [todo, settodo] = useState("");
    const handleSubmit = async () => {
        await addTodo(todo);
        settodo("");
    }
  return (
    <div>
        <input 
            type="text"
            onChange={(e) => settodo(e.target.value)}
            value={todo}/>
        <button onClick={handleSubmit}>Add</button>
    </div>
)
}
