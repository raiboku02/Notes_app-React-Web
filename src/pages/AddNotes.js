import React, { useState } from "react";
import "./AddNotes.css";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const AddNotes = () => {
  const navigate = useNavigate();

  const [note, setNote] = useState("");

  const onSetText = (data) => {
    let _data = data.target.value;
    setNote(_data);
  };

  const onClickSave = () => {
    navigate("/all-notes", { state: note });
  };

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <body>
        <form className="addNoteMain">
          <p className="addNoteText">Write Note: </p>
          <textarea
            className="textArea"
            type="text"
            onResize={false}
            onChange={(text) => onSetText(text)}
          ></textarea>
          <p>{note}</p>
          <input
            className="addButton"
            type="button"
            value="Add Note"
            onClick={() => onClickSave()}
          ></input>
        </form>
      </body>
    </div>
  );
};

export default AddNotes;
