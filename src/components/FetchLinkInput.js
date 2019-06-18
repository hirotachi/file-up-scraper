import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {startFetchLink} from "../actions/filesActions";
import {setCurrentFile} from "../actions/currentFileActions";
import LinkForm from "./LinkForm";


const FetchLinkInput = (props) => {
  const [error, setError] = useState("");
  const handleFormSubmit = (link, reset) => {
    if (!link) {
      setError("Please provide a link first");
    } else {
      const exists = props.files.find(file => file.link === link);
      props.dispatch(exists ? setCurrentFile(exists) : startFetchLink(link, setError, reset));
      if (exists) reset();
    }
  };
  useEffect(() => {
    let timeout = error && setTimeout(() => setError(""), 3000);
    return () => clearTimeout(timeout);
  });
  return (
      <div className="searchInput">
        <p className={`searchInput_error`} style={{opacity: error ? 1 : 0}}>{error}</p>
        <LinkForm
            button="fetch"
            mobileChange={true}
            value={""}
            handleSubmit={handleFormSubmit}
            placeholder="your file-up link"
            inputClassName="searchInput_input"
            buttonClassName="searchInput_btn"
        />
      </div>
  )
};
const mapStateToProps = (state) => ({files: state.files});
export default connect(mapStateToProps)(FetchLinkInput);