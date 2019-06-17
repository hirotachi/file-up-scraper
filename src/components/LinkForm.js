import React from "react";
import InputHandler from "../costumHooks/inputHandler";

const LinkForm = (props) => {
  const {reset, ...input} = InputHandler(props.value);
  const {placeholder = ""} = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(input.value.trim(), reset);
  };
  return (
      <form onSubmit={handleSubmit}>
        <input placeholder={placeholder} {...input} type="text"/>
        <button>{props.button}</button>
      </form>
  )
};

export default LinkForm;