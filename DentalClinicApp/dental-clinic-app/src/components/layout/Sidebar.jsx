import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <>
      <div className="min-vh-100 bg-gray">
        <ul>
          <il>
            <a className="nav-link p-2">
              <i className="bi-house" />
              <Link
                to="/home"
                className="text-decoration-none ms-1 d-none d-sm-inline"
              >
                HOME
              </Link>
            </a>
          </il>
          <il>
            <a className="nav-link p-2">
              <i className="bi-house" />

              <Link
                to="/users"
                className="text-decoration-none ms-1 d-none d-sm-inline"
              >
                USERS
              </Link>
            </a>
          </il>
          <il>
            <a className="nav-link p-2">
              <i className="bi-house" />

              <Link
                to="/patients"
                className="text-decoration-none ms-1 d-none d-sm-inline"
              >
                PATIENTS
              </Link>
            </a>
          </il>
          <il>
            <a className="nav-link p-2">
              <i className="bi-house" />

              <Link
                to="/#"
                className="text-decoration-none ms-1 d-none d-sm-inline"
              >
                INVENTORY
              </Link>
            </a>
          </il>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
