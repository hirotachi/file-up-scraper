import React from "react";
import InputHandler from "../costumHooks/inputHandler";
import layoutChangeHandler from "../costumHooks/layoutChangeHandler";
import Request from "../icons/Request";

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
        {
          props.mobileChange ?
              (layoutChangeHandler("mobile") ? <Request/> : <button>{props.button}</button>)
              :
              <button>{props.button}</button>
        }
      </form>
  )
};

export default LinkForm;