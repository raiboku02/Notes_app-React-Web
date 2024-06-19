import React, { useState } from "react";
import "./AddNotes.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNotes = () => {
  const navigate = useNavigate()

  const [note, setNote] = useState(' ');

  const onClickSave = async () => {
    let saveNote = {
      note: note
    }
    console.log(note)
    try {
      await axios.post('http://localhost:8808/notes', saveNote)
      navigate('/all-notes')
    } catch (error) {
      console.log(error)
    }
  }

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
            placeholder="Type Note Here..."
            onResize={false}
            onChange={(text) => setNote(text.target.value)}
          ></textarea>
          {/* <p>{allNotes[allNotes.length].note}</p> */}
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
