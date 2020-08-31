import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

class PrivateRoute extends React.Component {
render(){
  const { component: Component, ...rest } = this.props;
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem("userDetails") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
   
    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
);
