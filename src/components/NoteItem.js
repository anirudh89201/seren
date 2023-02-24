import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
const NoteItem = (props) => {
  const { note, UpdateNote } = props;
  const context = useContext(NoteContext);
  const { DeleteNote } = context;

  return (
    <div className="col-md-3">
      <div className="card my-3" id="noteitemmain">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title" id="addnotep1">{note.title}</h5>
            <i
              className="far fa-trash-alt mx-2"
              id="noteitemicon"
              onClick={() => {
                DeleteNote(note._id);
              }}
            ></i>
            <i
              className="far fa-edit mx-2"
              id="noteitemicon"
              onClick={() => {
                UpdateNote(note);
              }}
            ></i>
          </div>
          <p id="notetag">{note.tag}</p>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
