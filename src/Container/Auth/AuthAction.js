import * as types from "./AuthActionType";
import axios from "axios";
import { message } from "antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export const login = ({ emailAddress, password }, cb) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  axios
    .post(`https://falcon-everything.el.r.appspot.com/user/login`, {
      emailAddress: emailAddress,
      password: password,
    })
    .then((res) => {
      console.log(res.data.data[0]);
      console.log(res.data && res.data.data[0]);
      sessionStorage.setItem("userDetails", JSON.stringify(res.data));
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });

      cb && cb(res.data.message);
    })
    .catch((err) => {
      console.log(err);
      cb && cb("failure");
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err,
      });
    });
};

export const register = (data, cb) => (dispatch) => {
  dispatch({
    type: types.REGISTER_REQUEST,
  });
  axios
    .post(`https://falcon-everything.el.r.appspot.com/user/register`, data)
    .then((res) => {
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: res.data,
      });

      cb && cb("success");
    })
    .catch((err) => {
      console.log(err);
      cb && cb("failure");
      dispatch({
        type: types.REGISTER_FAILURE,
        payload: err,
      });
    });
};

export const logout = (history) => (dispatch) => {
  window.sessionStorage.clear();
  history.push("/login");
  dispatch({ type: types.LOGOUT });
  message.success("You have successfully logged out. See you soon.");
};
