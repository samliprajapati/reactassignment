import * as types from "./DashBoardActionType";
const initialState = {
  fetchingCategory: false,
  fetchingCategoryError: false,
  categories: [],

  currentCategory: sessionStorage.getItem("currentCategory")
    ? JSON.parse(sessionStorage.getItem("currentCategory"))
    : {},

  addCategoryModal: false,

  addingCategory: false,
  addingCategoryError: false,

  updateCategoryModal: false,
  updatingCategory: false,
  updatingCategoryErroR: false,
};
export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CATAGOTY_REQUEST:
      return { ...state, fetchingCategory: true };
    case types.GET_ALL_CATAGORY_SUCCESS:
      return {
        ...state,
        fetchingCategory: false,
        categories: action.payload,
      };
    case types.GET_ALL_CATAGORY_FAILURE:
      return { ...state, fetchingCategory: false, fetchingCategoryError: true };

    case types.GET_CURRENT_CATAGORY_SUCCESS:
      return {
        ...state,
        currentCategory: action.payload,
      };

    case types.HANDLE_CATEGORY_MODAL:
      return { ...state, addCategoryModal: action.payload };

    case types.UPDATE_CATEGORY_MODAL:
      return { ...state, updateCategoryModal: action.payload };

    case types.ADD_CATAGORY_REQUEST:
      return { ...state, addingCategory: true };
    case types.ADD_CATAGORY_SUCCESS:
      return {
        ...state,
        addingCategory: false,
        addCategoryModal: false,
      };
    case types.ADD_CATAGORY_FAILURE:
      return {
        ...state,
        addingCategory: false,
        addingCategoryError: true,
        addCategoryModal: false,
      };

    case types.UPDATE_CATAGORY_REQUEST:
      return { ...state, updatingCategory: true };
    case types.UPDATE_CATAGORY_SUCCESS:
      return {
        ...state,
        updatingCategory: false,
        updateCategoryModal: false,
        currentCategory: action.payload,
      };
    case types.UPDATE_CATAGORY_FAILURE:
      return {
        ...state,
        updatingCategory: false,
        updatingCategoryError: true,
        updateCategoryModal: false,
      };
    default:
      return state;
  }
  return state;
};
