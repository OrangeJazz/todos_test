import "./App.scss";
import Title from "./components/Title";
import Todo from "./components/ToDo";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Title title="ToDo App" />
      <Todo />
    </Provider>
  );
}

export default App;
