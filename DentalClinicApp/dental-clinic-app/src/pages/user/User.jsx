import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreateUserPage from "./CreateUserPage";
import UserListPage from "./UserListPage";

const User = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <Link to="/users" className="text-decoration-none text-secondary">
            USERS
          </Link>
        </div>
        <div className="col-sm-2">
          <Link
            to="/create-user"
            className="text-decoration-none text-secondary"
          >
            CREATE USER
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className="p-2">
        <Routes>
          <Route path="/create-user" element={<CreateUserPage />}></Route>
          <Route path="/users" element={<UserListPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default User;
