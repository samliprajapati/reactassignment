import { combineReducers } from "redux";

/**
 *  All of application reducers import goes here...
 */
import { authReducer } from "../Auth/AuthReducer";

import { dashboardReducer } from "../DashBoard/DashBoardReducer";

const appReducer = combineReducers({
  auth: authReducer,

  dashboard: dashboardReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
