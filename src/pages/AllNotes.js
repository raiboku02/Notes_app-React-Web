import React from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

const AllNotes = () => {
  const location = useLocation();
  const addedNote = location.state;

  return (
    <div>
      <NavBar></NavBar>
      <p>AllNotes</p>
      <p>{addedNote}</p>
    </div>
  );
};

export default AllNotes;
