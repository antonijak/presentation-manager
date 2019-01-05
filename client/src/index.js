import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
