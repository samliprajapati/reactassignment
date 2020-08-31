import React from "react";
import { Card } from "antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function Mycard(props) {
  function handleClick() {
    props.getCurrentCatagory(props.currentCategory);
    props.history.push("/categoryDetails");
  }
  return (
    <div>
      <Card title="Category Name" style={{ width: 300 }}>
        <p
          style={{ fontSize: "18px", cursor: "pointer", color: "#1890ff" }}
          onClick={handleClick}
        >
          {props.CategoryName}
        </p>
      </Card>
    </div>
  );
}
export default Mycard;
