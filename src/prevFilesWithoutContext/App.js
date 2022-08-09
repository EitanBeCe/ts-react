// import { useState } from "react";
// import NewTodo from "./components/NewTodo";
// import Todos from "./components/Todos";
// import Todo from "./models/todo";

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//   };

//   const removeTodoHandler = (id: string) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <NewTodo onAddTodo={addTodoHandler} />
//       <Todos items={todos} onRemoveTodo={removeTodoHandler} />
//     </div>
//   );
// }

// export default App;
