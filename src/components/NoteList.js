import './NoteList.css';
import React, {useState, useEffect} from 'react';
import Note from './Note';
import DeleteNote from './DeleteNote';
import AddNote from './AddNote';
import { format } from "date-fns";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function NoteList({query}) {

    const [id, setId] = useState(1);

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes') || '[]'));


    useEffect(() => {
        if (notes.length === 0) {
            setNotes(JSON.parse(localStorage.getItem('notes') || '[]'));
        }else if (notes.length !== 0 && notes && (query === null || query === "")) {
            setNotes(JSON.parse(localStorage.getItem('notes') || '[]'));
            setId(JSON.parse(localStorage.getItem('notes'))[JSON.parse(localStorage.getItem('notes')).length - 1]?.id+1);               
        }else if(notes.length !== 0 && notes && query !== null){
            const searchResult = notes.filter((note) => note.text.includes(query));
            if(searchResult.length === 0){
                setNotes([]);
            }else{
                setNotes(searchResult);
            }           
        }
       
    }, [query]); 

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

    const handleDelete = (id) => {       
        const newNotes = notes.filter((note) => note.id !== id);
        localStorage.setItem("notes", JSON.stringify(newNotes));
        setNotes(newNotes);
    };

    return (
        <Grid container spacing={{sm:1, md:3, lg:3.5, xl:11}} rowSpacing={5} columns={{sm:1, md:3, lg:4, xl:4}}>
            {notes.map((note) => ( 
                <Grid item key={note.id}>
                    <Note><DeleteNote handleDelete={handleDelete} id={note.id} text={note.text} date={note.date}/></Note>
                </Grid>
            ))}
            <Grid item>
                <Note><AddNote handleClick={handleClick}/></Note>
            </Grid>
        </Grid>
    );
}

export default NoteList;