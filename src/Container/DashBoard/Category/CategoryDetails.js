import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EditOutlined } from "@ant-design/icons";
import { handleUpdateCategoryModal } from "../DashBoardAction";
import UpdateCategoryModal from "../UpdateCategoryModal";

function CategoryDetails(props) {
  return (
    <div>
      {props.currentCategory.categoryName}

      <EditOutlined onClick={() => props.handleUpdateCategoryModal(true)} />
      <UpdateCategoryModal
        updateCategoryModal={props.updateCategoryModal}
        handleUpdateCategoryModal={props.handleUpdateCategoryModal}
        currentCategory={props.currentCategory}
        history={props.history}
      />
    </div>
  );
}

const mapStateToProps = ({ dashboard }) => ({
  currentCategory: dashboard.currentCategory,
  updateCategoryModal: dashboard.updateCategoryModal,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleUpdateCategoryModal }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
