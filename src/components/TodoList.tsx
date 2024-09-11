import TodoItem from "./TodoItem";
import { useAppSelector } from "../hooks/selectorAndDispatchHooks";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  return (
    <ul className="max-w-[700px] w-full grid gap-[20px]">
      {todos.length === 0 ? (
        <li className="text-center">아직 입력된 투두가 없습니다.</li>
      ) : (
        todos.map((el) => <TodoItem key={`${el.id}__todo`} id={el.id} todo={el.todo} />)
      )}
    </ul>
  );
};

export default TodoList;
