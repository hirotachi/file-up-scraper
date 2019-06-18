import React from "react";
import InputHandler from "../costumHooks/inputHandler";
import layoutChangeHandler from "../costumHooks/layoutChangeHandler";
import Request from "../icons/Request";

const LinkForm = (props) => {
  const {reset, ...input} = InputHandler(props.value);
  const {placeholder = "", buttonClassName = "", inputClassName = ""} = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(input.value.trim(), reset);
  };
  return (
      <form onSubmit={handleSubmit}>
        <input className={inputClassName} placeholder={placeholder} {...input} type="text"/>
        {
          props.mobileChange ?
              (layoutChangeHandler("mobile") ?
                  <span className={buttonClassName} onClick={handleSubmit}>
                    <Request iconStyle="searchInput_add"/>
                  </span> :
                  <button className={buttonClassName}>{props.button}</button>)
              :
              <button className={buttonClassName}>{props.button}</button>
        }
      </form>
  )
};

export default LinkForm;