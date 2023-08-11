import { combineReducers } from "redux";

// Import all Reducers
import authReducer from "./auth";
import challengesReducer from "./challenges";
import dashboardReducer from "./dashbord";
import userReducer from "./user";

export default combineReducers({
  authReducer,
  challengesReducer,
  dashboardReducer,
  userReducer,
});
