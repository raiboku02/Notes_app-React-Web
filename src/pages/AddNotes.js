import React, { useEffect, useState } from "react";
import "./AddNotes.css";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";

const AddNotes = () => {
  const location = useLocation()
  const returnedNotes = location.state;

  const navigate = useNavigate();

  const [note, setNote] = useState(" ");
  const [allNotes, setAllNotes] = useState([...returnedNotes.addedNote]);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const onClickSave = () => {
    let copyAllNotes = [...allNotes];
    copyAllNotes.push({
      id: new Date().getTime(),
      note: note,
    });
    setAllNotes(copyAllNotes);
    setShouldNavigate(true);
  };

  useEffect(() => {
    if (shouldNavigate) {
      navigate("/all-notes", { state: allNotes });
      setShouldNavigate(false);
    }
  }, [allNotes, shouldNavigate, navigate]);

  useEffect(() => {
    console.log(returnedNotes)
  }, [returnedNotes]);

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
