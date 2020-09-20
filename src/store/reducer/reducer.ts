import { TODO } from "./../../types/types";
import { ActionTypes } from "./../../types/action";

const initialState: Array<TODO> = [
  { task: "asdfasdf", complete: false },
  { task: "asdfasdf", complete: false },
];

export const todoReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};
