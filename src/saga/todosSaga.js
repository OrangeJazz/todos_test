import { todosUrl } from "../services/api";
import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_TODOS, setTodos } from "../store/reducers/todosSlice";

const fetchTodosfromApi = () => fetch(todosUrl);

function* fetchTodosWorker() {
  const data = yield call(fetchTodosfromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setTodos(json));
}

export function* todosWatcher() {
  yield takeEvery(FETCH_TODOS, fetchTodosWorker);
}
