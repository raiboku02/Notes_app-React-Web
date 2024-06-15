import './Dashboard.css'
import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate("/add-notes");
  };
  const onClickView = () => {
    navigate("/all-notes");
  };

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <body>
        <form className="mainForm">
            <input
              className="addNoteButton"
              type="button"
              value={"Add Notes"}
              onClick={() => onClickAdd()}
            />
            <input
              className="allNotesButton"
              type="button"
              value={"All Notes"}
              onClick={() => onClickView()}
            />
        </form>
      </body>
    </div>
  );
};

export default Dashboard;
