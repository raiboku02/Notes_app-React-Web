import "./NavBar.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const clickNavigate = () => {
    let object = {
      id: 1,
      name: "sample object",
    };
    navigate("/about", { state: object });
  };

  return (
    <div className="main">
      <div>
        <p className="text">Notes App</p>
      </div>
      <div>
        <Link to="/" className="navBarLink">Home</Link>
        <Link to="/dashboard" className="navBarLink">Dashboard</Link>

        <input
          className="navBarButton"
          type="button"
          value={"About"}
          onClick={() => clickNavigate()}
        ></input>
      </div>
    </div>
  );
}

export default NavBar;
