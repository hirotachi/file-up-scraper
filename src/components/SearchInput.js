import React from "react";
import {connect} from "react-redux";
import InputHandler from "../costumHooks/inputHandler";
import {startFetchLink} from "../actions/filesActions";


const SearchInput = (props) => {
  const {reset, ...link} = InputHandler("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.dispatch(startFetchLink(link.value.trim()));
    reset();
  };
  return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <input {...link} type="text" placeholder="link to fetch"/>
          <button>fetch</button>
        </form>
      </div>
  )
};

export default connect()(SearchInput);