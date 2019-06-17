import React, {Component} from 'react';
import {connect} from "react-redux";
import Player from "./Player";
import FilesDirectory from "./filesDirectory/FilesDirectory";
import {startFilesCheck} from "../actions/filesActions";
import FetchLinkInput from "./FetchLinkInput";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(startFilesCheck(this.props.files));
  }

  render() {
    return (
        <div>
          <FetchLinkInput/>
          <Player/>
          <FilesDirectory/>
        </div>
    )
  }
}

const mapStateToProps = ({files}) => ({files});
export default connect(mapStateToProps)(App);
