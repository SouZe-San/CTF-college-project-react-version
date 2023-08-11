import { combineReducers } from "redux";

// Import all Reducers

import challengesReducer from "./challenges";
import dashboardReducer from "./dashboard";
import userReducer from "./user";
import spawnReducer from "./spawn";

export default combineReducers({
  challengesReducer,
  dashboardReducer,
  userReducer,
  spawnReducer,
});
