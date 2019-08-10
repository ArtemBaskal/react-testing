import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import App from "./component/App";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
