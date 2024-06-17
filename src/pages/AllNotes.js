import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";

const AllNotes = () => {
  const location = useLocation();
  const addedNote = location.state;

  const navigate = useNavigate();

  const renderNotes = () => {
    let display = [];

    for (let i = 0; i < addedNote.length; i++) {
      display.push(<p>{addedNote[i].note}</p>);
    }
    return display;
  };

  const onClickAddMore = () => {
    navigate("/add-notes", { state: { addedNote } });
  };

  return (
    <div>
      <NavBar></NavBar>
      <p>AllNotes</p>
      <div>{renderNotes()}</div>
      <div>
        <input
          type="button"
          value="Add More +"
          onClick={() => onClickAddMore()}
        ></input>
      </div>
    </div>
  );
};

export default AllNotes;
