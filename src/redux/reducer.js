var count = 1;
const reducer = (state = count, action) => {
  const { type } = action;
  switch (type) {
    case "ADD": {
      return state + 1;
    }
    case "SUB": {
      if (state > 1) {
        return state - 1;
      }
      break;
    }
    default:
      return state;
  }
};
export default reducer;
