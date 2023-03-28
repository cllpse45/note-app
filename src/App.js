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

    const [currentNotId, setCurrentNotId] = React.useState(notes[0]?.id);


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

  function deleteNote(event,noteId){
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId))
  }


  function getCurrentNote(){

    return(
      notes.find((note) => {
        return note.id ===currentNotId
      })
    )
    
    
    //const ages = [18,20,30,40,65]
    //const result = ages.find(age => age >30);


  }



  return (
    <div className="App">
      <main>
        {notes.length > 0 ? (
          <div>
            <Split sizes={[25, 75]} direction="horizontal" className="split">
              <Sidebar notes={notes} newNote={createNewNote} deleteNote={deleteNote} currentNote={getCurrentNote} />
              <Editor currentNote={getCurrentNote()} />
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
