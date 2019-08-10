import tv4 from "tv4";
import stateShema from "./stateSchema";

export default ({
  dispatch,
  getState
}) => next => action => {
  next(action);
  if (!tv4.validate(getState(), stateShema)) {
    console.warn("Invalid state shema detected");
  }
};
