import React, {Component} from "react";
import {connect} from "react-redux";
import ReactJwPlayer from "react-jw-player";
import idGen from "../extra/idGen";

class Player extends Component {
  state = {
    playerId: idGen(),
    player: ""
  };
  onReady = () => {
    const player = window.jwplayer(this.state.playerId);
    this.setState({player: player});
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.currentFile !== nextProps.currentFile ||
        this.props.files !== nextProps.files;
  }

  componentDidUpdate(prevProps, prevState) {
    const changedCurrentFile = prevProps.currentFile.id !== this.props.currentFile.id;
    const addedFile = prevProps.files.length < this.props.files.length;
    const removedFile = prevProps.files.length > this.props.files.length;
    if (addedFile || (!removedFile && changedCurrentFile)) {
      this.state.player.play();
    }
  }

  render() {
    const {downloadLink, image, fileName} = this.props.currentFile;
    return (
        <div className="player">
          <ReactJwPlayer
              file={downloadLink}
              playerId={this.state.playerId}
              image={image}
              onReady={this.onReady}
              playerScript="https://cdn.jwplayer.com/libraries/MD5Zj5Ca.js"
          />
          <h2 className="player_title">{fileName}</h2>
        </div>
    )
  }
}

const mapStateToProps = ({currentFile, files}) => ({currentFile, files});
export default connect(mapStateToProps)(Player);