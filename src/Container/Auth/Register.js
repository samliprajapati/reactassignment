import React from "react";
import { Input, Button, Form, message, DatePicker } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import "./Login.css";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { register } from "./AuthAction";
const history = createBrowserHistory();

function Register(props) {
  function handleCallBack() {}

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        contactNumber: "",
        emailAddress: "",
        password: "",
        identityType: "",
        identityNumber: "",
        deviceId: "",
        deviceLocation: "",
        allowAccessLocation: "",
        countryId: "",
        stateId: "",
        zipcode: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.register(values, handleCallBack);
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
          <div
            style={{
              width: "100%",
              padding: "100px 200px",
              height: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ width: "40%" }}>
              First Name
              <Form.Item
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              >
                <Input />
              </Form.Item>
              Last Name
              <Form.Item
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              >
                <Input />
              </Form.Item>
              Date Of Birth
              <Form.Item
                name="dateOfBirth"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dateOfBirth}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
              Contact #
              <Form.Item
                name="contactNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactNumber}
              >
                <Input />
              </Form.Item>
              Email
              <Form.Item
                name="emailAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              >
                <Input />
              </Form.Item>
              Password
              <Form.Item
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              >
                <Input.Password />
              </Form.Item>
            </div>
            <div style={{ width: "40%" }}>
              Identity Type
              <Form.Item
                name="emailAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              >
                <Input />
              </Form.Item>
              Identity Number
              <Form.Item
                name="emailAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              >
                <Input />
              </Form.Item>
              Address
              <Form.Item
                name="emailAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              >
                <Input />
              </Form.Item>
              Zip Code
              <Form.Item
                name="emailAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              >
                <Input />
              </Form.Item>
              <div>
                <ArrowLeftOutlined style={{ color: "#1890ff" }} />
                &nbsp;
                <Link to="/" style={{ textAlign: "center", fontSize: 14 }}>
                  Back To Login
                </Link>
              </div>
              <br />
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ auth }) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ register }, dispatch);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);

//   <form onSubmit={handleSubmit}>

//        <p>Password</p>
//       <Form.Item

//       name="password"
//     onChange={handleChange}
//         onBlur={handleBlur}
//       value={values.password}
//             >
//         <Input.Password />
//         </Form.Item>

//     <div style={idth:"48%"}}>

// </div>

// </form>
// </div>
