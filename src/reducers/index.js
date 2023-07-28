import { combineReducers } from "redux";

// Import all Reducers
import authReducer from "./auth";
export default combineReducers({
  authReducer,
});
