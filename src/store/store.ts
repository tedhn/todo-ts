import { todoReducer } from "./reducer/reducer";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({ todoReducer }),
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
