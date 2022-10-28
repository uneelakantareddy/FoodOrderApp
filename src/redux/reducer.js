var count = 3;
const reducer = (state = count, action) => {
  const { type } = action;
  switch (type) {
    case "ADD": {
      return state + 1;
    }
    case "SUB": {
      return state - 1;
    }
    default:
      return state;
  }
};
export default reducer;
