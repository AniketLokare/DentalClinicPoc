import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserListPage from "../../pages/user/UserListPage";
import PatientList from "../../pages/patient/PatientListPage";
import HomePage from "../../pages/home/HomePage";
import CreateUserPage from "../../pages/user/CreateUserPage";
import Sidebar from "./Sidebar";

import RegisterPatientPage from "../../pages/patient/RegisterPatientPage";

const MainContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-2 pl-2">
          <Sidebar />
        </div>
        <div className="col-sm-8 p-4">
          <Routes>
            <Route path="/create-user" element={<CreateUserPage />}></Route>
            <Route path="/users" element={<UserListPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/patients" element={<PatientList />}></Route>
            <Route
              path="/register-patient"
              element={<RegisterPatientPage />}
            ></Route>
            <Route
              path="/update-patient/:id"
              element={<RegisterPatientPage />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MainContent;
