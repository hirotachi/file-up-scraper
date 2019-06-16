import React, {useReducer} from "react";
import {connect} from "react-redux";
import ReactPlayer from "react-player";

const Player = (props) => {
  const {downloadLink} = props.currentFile;
  const playDefaultState = {
    playing: false,
    loop: false,
    controls: false,
    light: false,
    volume: 1,
    muted: false,
    playbackRate: 1,
    pip: false,
    url: downloadLink
  };
  const [state, dispatch] = useReducer(playerReducer, playDefaultState);

  const togglePlay = () => dispatch({type: "toggle_play"});
  const toggleAudio = () => dispatch({type: "toggle_audio"});
  return (
      <div style={{position: "relative"}}>
        react player
        <ReactPlayer {...state}/>
        <button onClick={togglePlay}>{state.playing ? "pause" : "play"}</button>
        <button
            style={{position: "absolute", top: 0, left: 0}}
            onClick={toggleAudio}>{state.muted ? "Unmute" : "mute"}</button>
      </div>
  )
};

const mapStateToProps = (state) => ({currentFile: state.currentFile});
export default connect(mapStateToProps)(Player);

const playerReducer = (state, action) => {
  switch (action.type) {
    case "toggle_play":
      return {...state, playing: !state.playing};
    case "toggle_audio":
      return {...state, muted: !state.muted};
    default:
      return state
  }
};