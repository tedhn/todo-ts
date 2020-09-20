import { ADD_TODO } from "../../types/action";

export const addTodo = (text: String) => {
  return { type: ADD_TODO, payload: { task: text, complete: false } };
};
