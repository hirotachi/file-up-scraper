import React, {useState} from "react";
import {connect} from "react-redux";
import ReactJwPlayer from "react-jw-player";
import idGen from "../extra/idGen";

const Player = (props) => {
  const {downloadLink, image, fileName} = props.currentFile;
  const [playerId] = useState(idGen());
  let player;
  const onReady = () => {
    player = window.jwplayer(playerId);
  };
  return (
      <div style={{width: "50%", height: "50%"}}>
        react player
        <ReactJwPlayer
            file={downloadLink}
            playerId={playerId}
            image={image}
            onReady={onReady}
            playerScript="https://cdn.jwplayer.com/libraries/MD5Zj5Ca.js"
        />
        <h2>{fileName}</h2>
      </div>
  )
};

const mapStateToProps = (state) => ({currentFile: state.currentFile});
export default connect(mapStateToProps)(Player);