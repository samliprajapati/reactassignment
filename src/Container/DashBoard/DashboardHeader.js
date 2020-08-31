import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddCategoryModal from "./AddCategoryModal";
function DashboardHeader(props) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button type="primary" onClick={() => props.handleCategoryModal(true)}>
        <PlusOutlined />
      </Button>
      <AddCategoryModal
        addCategoryModal={props.addCategoryModal}
        handleCategoryModal={props.handleCategoryModal}
      />
    </div>
  );
}
export default DashboardHeader;
