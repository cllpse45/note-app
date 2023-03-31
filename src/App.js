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

  function updateNote(noteBody){
    
    const noteIndex = notes.findIndex((note) => note.id === currentNoteId)
    
    if(noteIndex === -1){
      return;
    }

    const updatedNote = {
      id: currentNotId,
      body: noteBody
    };

    const updatedNotes = [...notes];
    updatedNotes[noteIndex] = updatedNote;

    setNotes[updatedNotes];



    //2.yol
    /*
    setNotes((prevNotes) => {
      const updatedNotes =[...prevNotes];
      updatedNotes[noteIndex] = updatedNote;
      return updatedNotes;
    });
    */
    
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

/*
//Arrow Function Example
// (parameters) => {logic}   - base arrow function

function counterFunc(counter){
  if(counter>100){
    counter = 0;
  }else{
    counter++;
  }

  return counter;
}

const counterFunc2 = (counter) => {counter > 100 ? 0 : counter++};

*/




  return (
    <div className="App">
      <main>
        {notes.length > 0 ? (
          <div>
            <Split sizes={[25, 75]} direction="horizontal" className="split">
              <Sidebar 
              notes={notes} 
              newNote={createNewNote} 
              deleteNote={deleteNote} 
              currentNote={getCurrentNote}
              setCurrentNotId={setCurrentNotId}
              />
              <Editor currentNote={getCurrentNote} updateNote={updateNote} />
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
