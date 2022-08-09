import { useRef } from "react";

import classes from "./NewTodo.module.css";

// Void - because there will be no return in the func
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  // Connected to certain element. Initial state should be explicit in ref case (null)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // !. - I'm sure that here connect with ref in JSX is already established. We'll not have null or undefined here
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim() === "") {
      // Throw an error
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">ToDo:</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
