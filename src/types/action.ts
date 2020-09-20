export const ADD_TODO = "ADD_TODO";

interface ADDTODO {
  type: typeof ADD_TODO;
  payload: { task: string; complete: boolean };
}

export type ActionTypes = ADDTODO;
