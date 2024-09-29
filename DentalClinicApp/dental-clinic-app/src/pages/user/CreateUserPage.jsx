import React from "react";
import UserCreateForm from "../../components/user/UserCreateForm";
import User from "./User";

const CreateUserPage = () => {
  return (
    <div>
      <User />
      <UserCreateForm />
    </div>
  );
};

export default CreateUserPage;
