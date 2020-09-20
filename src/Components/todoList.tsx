import React from "react";
import { connect } from "react-redux";

import { TODO } from "../types/types";
import Task from "./task";

interface Props {
  todolist: TODO[];
}

interface rootState {
  todoReducer: TODO[];
}

const TodoList: React.FC<Props> = ({ todolist }) => {
  return (
    <ul>
      {todolist.map((todo, index) => (
        <Task key={index} todo={todo} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: rootState) => {
  return { todolist: state.todoReducer };
};

export default connect(mapStateToProps)(TodoList);
