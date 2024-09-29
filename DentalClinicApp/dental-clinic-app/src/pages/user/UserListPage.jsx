import React from "react";
import ListUserComponent from "../../components/user/ListUserComponent";
import User from "./User";

const UserListPage = () => {
  return (
    <div className="grid gap-8">
      <User />
      <ListUserComponent />
    </div>
  );
};

export default UserListPage;
