import React from "react";
import "./styles/style.css";
import Editor from "./components/Editor";


function App() {
  
  const[notes,setNotes] = React.useState([]);
  
  return (
    <div className="App">
      <main>
        {notes.length > 0 ? (
          <div>{Editor}</div>
        ): (
          <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note">Create one now</button>

        </div>
        )
        }
      </main>
    </div>
  );
}

export default App;
