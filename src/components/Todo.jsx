import { useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { addTodo, fetchTodos } from "../store/reducers/todosSlice";

const Todo = () => {
  const todosState = useAppSelector((state) => state.todosSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div>
      <Form
        onSubmit={(todo) => {
          dispatch(addTodo(todo));
        }}
      />
      <List items={todosState.todos} />
    </div>
  );
};

export default Todo;
