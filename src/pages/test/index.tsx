import React from "react";
import { Dropdown, Button, MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const Test: React.FC = () => (
  <div className="App">
    <Dropdown menu={{ items }} placement="bottomLeft">
      <Button>bottomLeft</Button>
    </Dropdown>

    <Dropdown menu={{ items }} placement="bottom">
      <Button>bottom</Button>
    </Dropdown>

    <Dropdown menu={{ items }} placement="bottomRight">
      <Button>bottomRight</Button>
    </Dropdown>
  </div>
);

export default Test;
