import React from "react";
import { Input, Button, Form, message, Modal } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCatagory } from "./DashBoardAction";

function AddCategoryModal(props) {
  function handleCancel() {
    props.handleUpdateCategoryModal(false);
  }
  function handleCallback(status) {
    if (status === "Category Updated") {
      props.history.push("/");
      message.success("Update Successfull");
    }
  }
  return (
    <Modal
      title="Category"
      footer={null}
      visible={props.updateCategoryModal}
      //   onOk={this.handleOk}
      onCancel={handleCancel}
    >
      <Formik
        initialValues={{
          categoryName: props.currentCategory.categoryName || "hello",
          createdBy: "1",
        }}
        onSubmit={(values, { setSubmitting }) => {
          props.updateCatagory(
            props.currentCategory.id,
            values,
            handleCallback
          );
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <p>Category Name</p>
            <Form.Item
              name="categoryName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.categoryName}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Update{" "}
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  );
}

const mapStateToProps = ({ dashboard }) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateCatagory }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryModal);
