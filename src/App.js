import React from "react";
import "antd/dist/antd.min.css";

import MainLayout from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import Room from "./container/Room/Room";
import RoomDetail from "./container/Room/RoomDetail";

function App() {
  return (
    <>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/room" element={<Room></Room>}></Route>
            <Route
              path="/room/detail/:id"
              element={<RoomDetail></RoomDetail>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </>
  );
}

export default App;
