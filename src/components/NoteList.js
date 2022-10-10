import './NoteList.css';
import React, {useState, useEffect} from 'react';
import Note from './Note';
import DeleteNote from './DeleteNote';
import AddNote from './AddNote';
import { format } from "date-fns";

function NoteList() {

    const [id, setId] = useState(1);

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'));
        if (notes) {
         setNotes(notes);
         setId(notes[notes.length - 1].id+1);
        }
      }, []);

    const handleClick = (text) => {   
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
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes));
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