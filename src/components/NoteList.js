import './NoteList.css';
import React from 'react';
import Note from './Note';
import DeleteNote from './DeleteNote';
import AddNote from './AddNote';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const NoteList = ({notes, handleAdd, handleDelete}) => {


    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{sm:1, md:3, lg:3.5, xl:11}} rowSpacing={5} columns={{sm:1, md:3, lg:4, xl:4}}>
            {notes.map((note) => ( 
                <Grid item key={note.id}>
                    <Note noteColor={note.noteColor}><DeleteNote handleDelete={handleDelete} id={note.id} title={note.title} text={note.text} date={note.date} noteColor={note.noteColor}/></Note>
                </Grid>
            ))}
            <Grid item>
                <Note noteColor={"#00A064"}><AddNote handleAdd={handleAdd}/></Note>
            </Grid>
        </Grid>
        </Box>
    );
}

export default NoteList;