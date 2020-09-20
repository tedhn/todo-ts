import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./Components/todoList";
import AddTodo from "./Components/addTodo";

import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
