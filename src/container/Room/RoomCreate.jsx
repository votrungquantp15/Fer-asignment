import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import React from "react";

const RoomCreate = ({ visibleModal, showModal }) => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={visibleModal}
      onOk={showModal}
      onCancel={showModal}
      footer={null}
      width="60vw"
    >
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Room Name"
          name="roomName"
          rules={[{ required: true, message: "Please input your room name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Src image"
          name="img"
          rules={[{ required: true, message: "Please input your src image!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input your src image!" }]}
        >
          <InputNumber min={10} max={1000000} />
        </Form.Item>
        <Form.Item
          label="Type Room"
          name="typeId"
          rules={[{ required: true, message: "Please input type room" }]}
        >
          <Select style={{ width: 120 }} loading>
            <Select.Option value="1">Room for 1</Select.Option>
            <Select.Option value="2"> Room for 2</Select.Option>
            <Select.Option value="3"> Room for 3</Select.Option>
            <Select.Option value="4"> Room for 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RoomCreate;
