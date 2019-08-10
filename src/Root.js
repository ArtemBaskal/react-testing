import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import stateValidator from "./middleware/stateValidator";
import async from "./middleware/async";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  return <Provider store={store}>{children}</Provider>;
};
