import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const Todos = () => {
  return (
    <div className="mt-[100px] grid place-items-center gap-[30px]">
      <h1 className="text-[40px] font-bold">투두 리스트</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};
