import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useAppDispach } from "../hooks/selectorAndDispatchHooks";
import { addTodo } from "../store/todoReducer";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispach = useAppDispach();

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo(e.target.value);
  };

  const addTodoHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("할 일이 입력되지 않았습니다.");
      return;
    }
    dispach(addTodo(todo.trim()));
    setTodo("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex gap-[15px] max-w-[500px] w-full"
    >
      <label htmlFor="todo__input" className="grow">
        <input
          type="text"
          id="todo__input"
          placeholder="할 일을 입력해 주세요."
          value={todo}
          onChange={inputChangeHandler}
          className="p-[10px] rounded-[10px] border border-gray-200 w-full outline-none"
        />
      </label>
      <button type="submit" className="bg-[#60a5fa] text-white p-[10px] rounded-[10px] hover:bg-[#0ea5e9]">투두 추가</button>
    </form>
  );
};

export default TodoForm;
