import './NoteList.css';
import React, {useState} from 'react';
import Note from './Note';
import DeleteNote from './DeleteNote';
import AddNote from './AddNote';
import { format } from "date-fns";

function NoteList() {

    const [id, setId] = useState(1);

    var notes = JSON.parse(localStorage.getItem("notes") || "[]");

    //const [deleteNotes, setDeleteNotes] = useState([notes]);

    //console.log(deleteNotes)

    const handleClick = (text) => {   
        var notes = JSON.parse(localStorage.getItem("notes") || "[]");
        setId(id+1);
        var note = {
            id:id,
            text:text,
            date:format(new Date(), "MM/dd/yyyy")
        }
        notes.push(note);

        localStorage.setItem("notes", JSON.stringify(notes));
    };

    function handleDelete(id){
        /*
        console.log(id);
        const newNotes = deleteNotes.filter((note) => note.id !== id);
        console.log(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes));
        setDeleteNotes(newNotes);*/
    };

    return (
        <div className="ShowNote">
            {notes.map((note) => ( 
                <div key={note.id}>
                    <Note><DeleteNote handleDelete={handleDelete} id={note.id} text={note.text} date={note.date}/></Note>
                </div>
            ))}
            <Note><AddNote handleClick={handleClick}/></Note>
        </div>

    );
}

export default NoteList;