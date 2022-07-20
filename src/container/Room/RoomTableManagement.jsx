import { Space, Table, Tag } from "antd";
import React from "react";

import dayjs from "dayjs";

const columns = [
  {
    title: "Room Name",
    dataIndex: "roomName",
    key: "roomName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "RoomID",
    dataIndex: "roomID",
    key: "roomID",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "roomPrice",
    key: "roomPrice",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (value) => {
      return value ? dayjs(value).format("DD/MM/YYYY") : "";
    },
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    roomName: "John Brown",
    roomID: "Room1",
    age: 32,
    date: "12/12/2001",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    roomName: "Jim Green",
    roomID: "Room2",
    age: 42,
    date: "12/12/2001",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    roomName: "Joe Black",
    roomID: "Room3",
    age: 32,
    date: "12/12/2001",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const RoomTableManagement = () => <Table columns={columns} dataSource={data} />;
export default RoomTableManagement;
