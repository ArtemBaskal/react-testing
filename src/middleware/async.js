export default ({ dispatch }) => next => acion => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
};

action.payload.then(response => {
  const newAction = { ...action, payload: response };
  dispatch(newAction);
});
