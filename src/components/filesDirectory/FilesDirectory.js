import React from "react";
import {connect} from "react-redux";
import File from "./File";
import idGen from "../../extra/idGen";
import FileSearch from "./FileSearch";
import InputHandler from "../../costumHooks/inputHandler";
import searchSelection from "../../selectors/searchSelection";

const FilesDirectory = (props) => {
  const {reset, ...search} = InputHandler("");
  let files = searchSelection(props.files, search.value);
  return (
      <div>
        <FileSearch search={search}/>
        {
          files.length === 0 ?
              <p>add files first</p> :
              files.map(file => <File key={idGen()} {...file}/>)
        }
      </div>
  );
};

const mapStateToProps = ({files}) => ({files});
export default connect(mapStateToProps)(FilesDirectory);