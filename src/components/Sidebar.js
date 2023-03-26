import React from "react";

function Sidebar(props){
    
    console.log(props.notes);
    
    const noteElements = props.notes.map((note,index) => (
        <div className="title">
            <h4 className="text-snippet">{note.body}</h4>
            <button className="delete-btn">Delete</button>
        </div>
    ))
    
    
    return(
        <>
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>

                <button className="new-note" onClick={props.newNote}> 

                    +
                </button>
            </div>
            {/*props.notes*/}
            {noteElements}
        </section>
        </>

    )
}

export default Sidebar;
