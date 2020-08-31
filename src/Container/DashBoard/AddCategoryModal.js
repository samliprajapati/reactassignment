import React from "react";
import { Input, Button, Form, message, Modal } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddCatagory } from "./DashBoardAction";

function AddCategoryModal(props) {
  function handleCancel() {
    props.handleCategoryModal(false);
  }

  return (
    <Modal
      title="Category"
      footer={null}
      visible={props.addCategoryModal}
      //   onOk={this.handleOk}
      onCancel={handleCancel}
    >
      <Formik
        initialValues={{ categoryName: "", createdBy: "1" }}
        onSubmit={(values, { setSubmitting }) => {
          props.AddCatagory(values);
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
              Add
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  );
}

const mapStateToProps = ({ dashboard }) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ AddCatagory }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryModal);
