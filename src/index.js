import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App/App.js";
import reducer from "./reducers/bookReducer.js";
import styles from "./components/App/App.module.css";
import "./index.css"
import "./assets/fonts/futura/Futura-Book-font.ttf";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App className={styles.app}/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
