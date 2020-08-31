import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch } from "antd";
import { setDarkTheme, setLightTheme } from "./ThemeAction";

export const lightTheme = {};

export const darkTheme = {};
class Theme extends Component {
  toggleTheme = (checked) => {
    if (checked === true) {
      this.props.setDarkTheme(darkTheme);
    } else {
      this.props.setLightTheme(lightTheme);
    }
  };
  render() {
    const { themeType } = this.props;
    return (
      <div>
        <Switch
          checked={themeType === "light" ? false : true}
          onChange={this.toggleTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ theme }) => ({
  themeType: theme.themeType,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setLightTheme,
      setDarkTheme,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
