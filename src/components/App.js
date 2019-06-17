import React, {Component} from 'react';
import {connect} from "react-redux";
import SearchInput from "./SearchInput";
import Player from "./Player";
import FilesDirectory from "./filesDirectory/FilesDirectory";
import {startFilesCheck} from "../actions/filesActions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(startFilesCheck(this.props.files));
  }

  render() {
    return (
        <div>
          <SearchInput/>
          <Player/>
          <FilesDirectory/>
        </div>
    )
  }
}

const mapStateToProps = ({files}) => ({files});
export default connect(mapStateToProps)(App);
