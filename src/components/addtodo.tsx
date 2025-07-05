import { useState, type FormEvent } from "react";
import { useTodos } from "../store/todos";

const Addtodo = () => {
  const [todo, settodo] = useState("");
  const { handleAddToDo } = useTodos();
  const handleForm = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    settodo("");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Addtodo;
