import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesINI = [];
  const [notes, setNotes] = useState(notesINI);
  const getNotes = async () => {
    const response = await fetch(`${host}/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const dataa = await response.json();
    console.log(dataa);
    setNotes(dataa);
  };

  const AddNote = async (title, description, tag) => {
    const response = await fetch(`${host}/notes/AddNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response);
    const note = await response.json();
    setNotes(notes.concat(note));
    console.log("Adding a Note");
    console.log(description);
  };

  const DeleteNote = async (id) => {
    console.log("Deleting Note " + id);
    const response = await fetch(`${host}/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    console.log(response);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const EditNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    let newNotes = JSON.parse(JSON.stringify(notes));
    console.log(response);
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, AddNote, EditNote, DeleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
