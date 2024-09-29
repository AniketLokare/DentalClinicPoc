import React from "react";

const UserTable = ({ users }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Password</th>
            <th>Mobile No.</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId} className="bg-white">
              <td className="px-4 py2 border">{user.userId}</td>
              <td className="px-4 py2 border">{user.userName}</td>
              <td className="px-4 py2 border">{user.userRole}</td>
              <td className="px-4 py2 border" type="password">
                {user.password}
              </td>
              <td className="px-4 py2 border">{user.userContactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
