import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { changeTodoStatus, setTodos } from "../store/reducers/todosSlice";

const swapElements = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];

  return arr;
};

const ListItem = (props) => {
  const dispatch = useAppDispatch();
  const todosState = useAppSelector((state) => state.todosSlice);
  const onChangeHandler = (e) => {
    const data = {id: props.item.id, status: e.target.checked}
    dispatch(changeTodoStatus(data))
  };
  const clickArrowHandler = (action) => {
    const x = todosState.todos.findIndex(todo => todo.id === props.item.id);
    const y = (action==="up") ? x - 1 : x + 1;
    const newTodos = swapElements([...todosState.todos], x, y);
    dispatch(setTodos(newTodos));
  }
  const disableButton = (action) => {
    const i = todosState.todos.findIndex(todo => todo.id === props.item.id);
    const lastIndex = todosState.todos.length - 1;
    if (i === 0 && action === "up") return true;
    if (i === lastIndex && action === "down") return true;
    return false;
  }
  return (
    <div>
      <label htmlFor={props.item.id}>
        <input
          type="checkbox"
          id={props.item.id}
          name={props.item.id}
          onChange={onChangeHandler}
          defaultChecked={props.item.completed}
        />
        {props.item.title}
      </label>
      <button disabled={disableButton("up")} onClick={() => clickArrowHandler("up")}>&#129045;</button>
      <button disabled={disableButton("down")} onClick={() => clickArrowHandler("down")}>&#129047;</button>
    </div>
  );
};

export default ListItem;
