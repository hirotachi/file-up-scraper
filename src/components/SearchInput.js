import React from "react";
import {connect} from "react-redux";
import InputHandler from "../costumHooks/inputHandler";
import {startFetchLink} from "../actions/filesActions";
import {setCurrentFile} from "../actions/currentFileActions";


const SearchInput = (props) => {
  const {reset, ...link} = InputHandler("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const url = link.value.trim();
    const exists = props.files.find(file => file.link === url);
    props.dispatch(exists ? setCurrentFile(exists) : startFetchLink(url));
    reset();
  };
  const test = () => {
    const link = "https://www.file-up.org/r7v381tggij9";
    props.dispatch(startFetchLink(link));
  };
  return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <input {...link} type="text" placeholder="link to fetch"/>
          <button>fetch</button>
        </form>
        <button onClick={test}>test</button>
      </div>
  )
};
const mapStateToProps = (state) => ({files: state.files});
export default connect(mapStateToProps)(SearchInput);