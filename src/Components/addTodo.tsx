import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/action/action";

interface Props {
  add: any;
}

const AddTodo: React.FC<Props> = ({ add }) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value !== "") {
      add(value);
      setValue("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="You text here"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: (task: String) => dispatch(addTodo(task)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
