import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
import RequireAuth from "../hoc/RequireAuth";
import AddTask from "./AddTask";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              {" "}
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addtask" element={<AddTask />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
