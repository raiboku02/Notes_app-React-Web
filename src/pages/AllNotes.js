import React, { useEffect, useState } from "react";
import "./AllNotes.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllNotes = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8808/notes");
      console.log(res);
      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderNoteList = () => {
    let display = [];
    for (let i = 0; i < notes.length; i++) {
      display.push(
        <p className="noteList" key={notes.id}>
          {notes[i].note}
        </p>
      );
    }
    return display;
  };

  const onClickAddMore = () => {
    navigate("/add-notes");
  };

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <body>
        <form className="allNotesMain">
          <h2>AllNotes</h2>
          <div>{renderNoteList()}</div>
          <div>
            <input
              type="button"
              value="Add More +"
              onClick={() => onClickAddMore()}
            ></input>
          </div>
        </form>
      </body>
    </div>
  );
};

export default AllNotes;
