import React, { useState } from "react";
import { Menu, Layout } from "antd";
import "./Container/Auth/Login.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import DashBoard from "./Container/DashBoard/DashBoard";
import { Route, Switch, Router } from "react-router-dom";
import CategoryDetails from "./Container/DashBoard/Category/CategoryDetails";
import Theme from "./Container/Theme/Theme";

const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;

function MainApp() {
  const [collapsed, setCollapsed] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Catagory
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          {/* <Theme /> */}
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/categoryDetails" component={CategoryDetails} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
export default MainApp;
