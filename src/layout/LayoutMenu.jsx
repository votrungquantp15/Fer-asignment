import {
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

export const LayoutMenu = () => {
  const menuItems = [
    {
      key: "center",
      icon: <UserOutlined />,
      label: "aaa",
      to: "/home",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Room",
      to: "/room",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Home",
      to: "/home",
    },
  ];
  return (
    <Menu
      theme="line"
      mode="inline"
      className="min-h-full"
      items={menuItems}
      onClick={(e) => {
        console.log(e);
      }}
    ></Menu>
  );
};
