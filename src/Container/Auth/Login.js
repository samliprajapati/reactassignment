import React from "react";
import { Input, Button, Form, message } from "antd";
import { Formik } from "formik";
import "./Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { login } from "./AuthAction";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function Login(props) {
  function handleLoginCallback(status) {
    console.log(status);

    if (status == "Login Successful") {
      debugger;
      props.history.push("/");
      message.success("Login Successful.");
    } else {
      message.error(
        " Email id and Password not match . Please try again later"
      );
    }
  }
  return (
    <Formik
      initialValues={{ emailAddress: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        props.login(values, handleLoginCallback);
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
        <div className="main">
          <div className="box">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <p>Email</p>
                <Form.Item
                  name="emailAddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailAddress}
                >
                  <Input />
                </Form.Item>
                <p>Password</p>
                <Form.Item
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                >
                  <Input.Password />
                </Form.Item>
                <div>
                  Don't have an account ?
                  <Link
                    to="/register"
                    style={{ textAlign: "center", fontSize: 14 }}
                  >
                    Register
                  </Link>
                </div>

                <br />
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ auth }) => ({
  logging: auth.logging,
  loginError: auth.loginError,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
