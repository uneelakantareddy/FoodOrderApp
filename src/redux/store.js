import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const middleware = [thunk];
const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
