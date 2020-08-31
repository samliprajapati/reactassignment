import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAllCatagory,
  getCurrentCatagory,
  handleCategoryModal,
} from "../DashBoard/DashBoardAction";
import Mycard from "./Mycard";
import DashboardHeader from "./DashboardHeader";
function DashBoard(props) {
  useEffect(() => {
    props.getAllCatagory();
  }, []);
  return (
    <>
      <div>
        <DashboardHeader
          handleCategoryModal={props.handleCategoryModal}
          addCategoryModal={props.addCategoryModal}
        />
      </div>
      {props.categories.length &&
        props.categories.map((element) => {
          debugger;
          return (
            <div>
              <Mycard
                CategoryName={element.categoryName}
                id={element.id}
                currentCategory={element}
                getCurrentCatagory={props.getCurrentCatagory}
                history={props.history}
              />
            </div>
          );
        })}
    </>
  );
}

const mapStateToProps = ({ dashboard }) => ({
  categories: dashboard.categories,
  addCategoryModal: dashboard.addCategoryModal,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { getAllCatagory, getCurrentCatagory, handleCategoryModal },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
