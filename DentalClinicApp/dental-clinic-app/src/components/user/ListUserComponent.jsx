import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import UserTable from "./userTable";

const ListUserComponent = () => {
  const [users, setUsers] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function createNewUser() {
    navigator("/create-user");
  }

  return (
    <>
      {/* <div className="pb-4">
        <button onClick={createNewUser} className="btn btn-light">
          Create User
        </button>
      </div> */}
      <UserTable users={users} />
    </>
  );
};

export default ListUserComponent;
