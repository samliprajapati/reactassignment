import * as types from "./DashBoardActionType";
import axios from "axios";
import { message } from "antd";

export const getAllCatagory = () => (dispatch) => {
  dispatch({ type: types.GET_ALL_CATAGOTY_REQUEST });
  axios
    .get(
      `https://falcon-everything.el.r.appspot.com/category/getAllCategory`,
      {}
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_ALL_CATAGORY_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_ALL_CATAGORY_FAILURE,
        payload: err,
      });
    });
};

export const getCurrentCatagory = (currentData) => (dispatch) => {
  sessionStorage.setItem("currentCategory", JSON.stringify(currentData));
  dispatch({
    type: types.GET_CURRENT_CATAGORY_SUCCESS,
    payload: currentData,
  });
};

export const handleCategoryModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_CATEGORY_MODAL,
    payload: modalProps,
  });
};

export const handleUpdateCategoryModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.UPDATE_CATEGORY_MODAL,
    payload: modalProps,
  });
};

export const AddCatagory = (data) => (dispatch) => {
  dispatch({ type: types.ADD_CATAGORY_REQUEST });
  axios
    .post(
      `https://falcon-everything.el.r.appspot.com/category/addCategory`,
      data
    )
    .then((res) => {
      console.log(res);
      dispatch(getAllCatagory());
      dispatch({
        type: types.ADD_CATAGORY_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_CATAGORY_FAILURE,
        payload: err,
      });
    });
};

export const updateCatagory = (id, data, cb) => (dispatch) => {
  dispatch({ type: types.UPDATE_CATAGORY_REQUEST });
  axios
    .put(
      `https://falcon-everything.el.r.appspot.com/category/updateCategory/${id}`,
      data
    )
    .then((res) => {
      console.log(res);

      dispatch({
        type: types.UPDATE_CATAGORY_SUCCESS,
        payload: res.data,
      });
      cb && cb(res.data.message);
    })
    .catch((err) => {
      console.log(err);
      cb && cb("failure");
      dispatch({
        type: types.UPDATE_CATAGORY_FAILURE,
        payload: err,
      });
    });
};
