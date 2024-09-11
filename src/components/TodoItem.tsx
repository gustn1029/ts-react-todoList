import React, { MouseEventHandler } from "react";
import { removeTodo, TodoData } from "../store/todoReducer";
import { useAppDispach } from "../hooks/selectorAndDispatchHooks";

const TodoItem = ({ id, todo }: TodoData) => {
  const dispach = useAppDispach();

  const removeTodoHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispach(removeTodo(id));
  };

  return (
    <li
      id={`${id}`}
      className="flex items-center p-[20px] shadow-xl bg-white rounded-[15px] gap-[10px]"
    >
      <p className="grow">{todo}</p>
      <button 
        type="button" 
        onClick={removeTodoHandler}
        className="border border-[#f43f5e] text-[#f43f5e] rounded-[10px] p-[10px] hover:text-white hover:bg-[#f43f5e]"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
