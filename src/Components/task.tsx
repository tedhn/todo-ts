import React from "react";

import { TODO } from "../types/types";

interface Props {
  todo: TODO;
}

const Task: React.FC<Props> = (props) => {
  return <li>{props.todo.task}</li>;
};

export default Task;
