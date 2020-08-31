import * as types from "./AuthActionType";
const initialState = {
  logging: false,
  loginError: false,
  userDetails: sessionStorage.getItem("userDetails")
    ? JSON.parse(sessionStorage.getItem("userDetails"))
    : {},

  registering: false,
  registeringError: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, logging: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
        userDetails: action.payload,
      };
    case types.LOGIN_FAILURE:
      return { ...state, logging: false, loginError: true };

    case types.REGISTER_REQUEST:
      return { ...state, registering: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        // userDetails: action.payload.data[0] || sessionStorage.getItem("userDetails")
      };
    case types.REGISTER_FAILURE:
      return { ...state, registering: false, registeringError: true };

    default:
      return state;
  }
  return state;
};
