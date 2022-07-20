import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";

const RoomFilterManagement = () => {
  const [form] = Form.useForm();

  const onFinish = (e) => {
    console.log(e);
  };
  const handleReset = () => {};
  return (
    <Form
      layout="vertical"
      form={form}
      name="filterForm"
      onFinish={onFinish}
      className="mb-6"
    >
      <div className="grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2 xl:grid-cols-4 xl:gap-x-6 xl:gap-y-3">
        <div className="col-span-full flex space-x-3 ">
          <Form.Item className="mb-0" label="Room Name" name="roomName">
            <Input placeholder="Room name" />
          </Form.Item>
          <Form.Item className="mb-0" label="Room ID " name="roomID">
            <Input placeholder="Room ID" />
          </Form.Item>
          <Form.Item className="mb-0" label="Status" name="status">
            <Select style={{ width: 120 }} placeholder="Select Status">
              <Select.Option value="oke">Oke</Select.Option>
              <Select.Option value="notOke">Not Oke</Select.Option>
            </Select>
          </Form.Item>
          <div className="pt-6 space-x-3 space-y-1">
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              Search
            </Button>

            <Button onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default RoomFilterManagement;
