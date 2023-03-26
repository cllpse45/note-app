import React from "react";
import "./styles/style.css";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { nanoid } from "nanoid";
import Split from "react-split";

function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your Note",
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  return (
    <div className="App">
      <main>
        {notes.length > 0 ? (
          <div>
            <Split sizes={[25, 75]} direction="horizontal" className="split">
              <Sidebar notes={notes} newNote={createNewNote} />
              <Editor />
            </Split>
          </div>
        ) : (
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button className="first-note" onClick={createNewNote}>
              Create one now
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
