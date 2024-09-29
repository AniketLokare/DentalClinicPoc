// /src/components/forms/UserForm.jsx
import React, { useState } from "react";
import { createUser } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const UserCreateForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userContactNumber, setUserContactNumber] = useState("");
  const [userRole, setUserRole] = useState("");

  const navigator = useNavigate();

  const addUser = (event) => {
    event.preventDefault();
    const user = { userName, password, userContactNumber, userRole };

    createUser(user).then((response) => {
      console.log(response.data);
      navigator("/users");
    });
  };

  return (
    <div className="container">
      <form>
        {/* User Name Field */}
        <div className="form-group mb-2">
          <label className="form-label">User Name</label>
          <input
            type="text"
            placeholder="Enter User Name"
            name="userName"
            value={userName}
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div className="form-group mb-2">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Phone Number Field */}
        <div className="form-group mb-2">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            placeholder="Enter Phone number"
            name="userContactNumber"
            value={userContactNumber}
            className="form-control"
            onChange={(e) => setUserContactNumber(e.target.value)}
          />
        </div>

        {/* Role Dropdown */}
        <div className="form-group mb-2">
          <label className="form-label">Role</label>
          <select
            name="userRole"
            value={userRole}
            className="form-control"
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Receptionist">Receptionist</option>
          </select>
        </div>

        {/* Submit Button */}
        <button className="btn btn-success" onClick={addUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserCreateForm;
