import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <i class="bi bi-bag-plus-fill"></i>
            {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"> */}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
