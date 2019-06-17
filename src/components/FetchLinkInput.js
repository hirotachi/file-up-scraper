import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {startFetchLink} from "../actions/filesActions";
import {setCurrentFile} from "../actions/currentFileActions";
import LinkForm from "./LinkForm";


const FetchLinkInput = (props) => {
  const [error, setError] = useState("");
  const handleFormSubmit = (link, reset) => {
    const exists = props.files.find(file => file.link === link);
    props.dispatch(exists ? setCurrentFile(exists) : startFetchLink(link, setError));
    reset();
  };
  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => setError(""), 3000);
    }
    return () => clearTimeout(timeout);
  });
  return (
      <div>
        {
          error && <p>{error}</p>
        }
        <LinkForm
            button="fetch"
            mobileChange={true}
            value={""}
            handleSubmit={handleFormSubmit}
            placeholder="your file-up link"
        />
      </div>
  )
};
const mapStateToProps = (state) => ({files: state.files});
export default connect(mapStateToProps)(FetchLinkInput);