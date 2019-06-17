import React from 'react';
import {Provider} from "react-redux";
import configureStore from "../store/configureStore";
import SearchInput from "./SearchInput";
import Player from "./Player";
import FilesDirectory from "./filesDirectory/FilesDirectory";


const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <div>
          <SearchInput/>
          <Player/>
          <FilesDirectory/>
        </div>
      </Provider>
  );
}

export default App;
