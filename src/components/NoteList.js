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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {notes.map((note) => ( 
                <Grid item xs={2} sm={4} md={4} key={note.id}>
                    <Note><DeleteNote handleDelete={handleDelete} id={note.id} text={note.text} date={note.date}/></Note>
                </Grid>
            ))}
            <Grid item xs={2} sm={4} md={4}>
                <Note><AddNote handleClick={handleClick}/></Note>
            </Grid>
        </Grid>
      </Box>
    );
}

export default NoteList;