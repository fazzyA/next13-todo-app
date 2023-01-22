import TodoApp from './todoapp';
import "../public/style.css";

const getTodos = async () => {
  let todos = await fetch("https://dummyjson.com/todos");
  return todos.json();
};

export default async function Page() {
  const { todos } = await getTodos();
  // const [todos, settodos] = useState([{id:1, todo:"hello"}])
  return (
    <div className="App-container">
      <TodoApp />
    </div>
  )
}
