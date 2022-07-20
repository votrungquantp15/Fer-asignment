import { Button, Card, Spin } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import RoomCreate from "./Room/RoomCreate";
import RoomFilterManagement from "./Room/RoomFilterManagement";
import RoomTableManagement from "./Room/RoomTableManagement";
import axios from "axios";

function Home() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [dataRoom, setDataRoom] = useState([]);
  const [filter, setFilter] = useState("");
  const showModal = () => {
    setVisibleModal(!visibleModal);
  };
  useEffect(() => {
    const getAllRoom = async () => {
      try {
        const res = await axios.get("/api/room");
        const { data } = res;
        setDataRoom(data);
      } catch (error) {}
    };
    getAllRoom();
  }, [filter]);

  return (
    <div className="relative w-full">
      <Spin spinning={false}>
        <Card title="Room Management">
          <RoomFilterManagement></RoomFilterManagement>
          <div className="relative w-full flex items-end">
            <Button type="primary" onClick={showModal} className=" mb-4 ">
              Create Room
            </Button>
          </div>

          <RoomTableManagement dataRoom={dataRoom}></RoomTableManagement>
        </Card>
      </Spin>
      <RoomCreate visibleModal={visibleModal} showModal={showModal} />
    </div>
  );
}

export default Home;
