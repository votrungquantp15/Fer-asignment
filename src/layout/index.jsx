import { UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { LayoutMenu } from "./LayoutMenu";
const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Header className="flex flex-row-reverse">
          <div className="logo" />
          <div>
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
        </Header>
        <Layout className="">
          <Sider className="min-h-screen fixed overflow-auto">
            <LayoutMenu />
          </Sider>

          <Layout
            style={{
              padding: "0 24px 24px",
            }}
            className="min-h-screen"
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
