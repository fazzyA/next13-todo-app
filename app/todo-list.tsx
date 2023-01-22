import React from 'react'
interface TodoType {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }
  interface TodosProp {
    todos: TodoType[];
}

export default async function TodoList({todos}: TodosProp) {
    console.log("🚀 ~ file: todo-list.tsx:14 ~ TodoList ~ todos", todos)

    return (
      <div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((t: TodoType) => {
            return (
              <li key={t.id} style={{ padding: "5px 0" }}>
                {t.todo}
              </li>
            );
          })}
        </ul>
      </div>  );
}
