import React, { useEffect, useState } from "react";
import "./AllNotes.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllNotes = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [itemId, setItemId] = useState(" ");
  const [newNote, setNewNote] = useState(' ');

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

  const clickUpdate = (data) => {
    setItemId(data)
  };

  const clickDelete = async (data) => {
    try {
      await axios.delete(`http://localhost:8808/notes/${data}`);
      fetchNotes()
    } catch (error) {
      console.log(error);
    }
  };

  const clickSave = async(data) => {
    let saveNote = {
      note: newNote
    }
    try {
      await axios.put(`http://localhost:8808/notes/${data}`, saveNote);
      console.log({data})
      console.log({newNote})
      setItemId(' ')
      fetchNotes()
    } catch (error) {
      console.log(error);
    }
  };

  const clickCancel = () => {
    setItemId(' ')
  };

  const renderNoteList = () => {
    let display = [];
    for (let i = 0; i < notes.length; i++) {
      display.push(
        <div>
          {itemId !== notes[i].id && (
            <div className="allNoteButtons">
              <div>
                <p className="noteList" key={notes.id}>
                  {notes[i].note}
                </p>
              </div>
              <div className="buttonView">
                <div>
                  <input
                    className="updateButton"
                    type="button"
                    value={"Update"}
                    onClick={() => clickUpdate(notes[i].id)}
                  ></input>
                </div>
                <div>
                  <input
                    className="deleteButton"
                    type="button"
                    value={"Delete"}
                    onClick={() => clickDelete(notes[i].id)}
                  ></input>
                </div>
              </div>
            </div>
          )}
          {itemId === notes[i].id && (
            <div className="allNoteButtons">
              <div>
                <textarea
                  className="textAreaAllNotes"
                  type="text"
                  placeholder="Type New Text..."
                  onResize={false}
                  onChange={(text) => setNewNote(text.target.value)}
                  ></textarea>
              </div>
              <div className="buttonView">
                <div>
                  <input
                    className="updateButton"
                    type="button"
                    value={"Save"}
                    onClick={() => clickSave(notes[i].id)}
                  ></input>
                </div>
                <div>
                  <input
                    className="deleteButton"
                    type="button"
                    value={"Cancel"}
                    onClick={() => clickCancel()}
                  ></input>
                </div>
              </div>
            </div>
          )}
        </div>
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
