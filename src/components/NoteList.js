import React, { useState } from 'react';
import Note from './Note';
import DeleteNote from './DeleteNote';
import AddNote from './AddNote';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const NoteList = ({notes, handleAdd, handleDelete}) => {

  const [ colorNote, setColorNote ] = useState('#d4b055');
  const [ noteLabelColor, setNoteLabelColor ] = useState('#f5cf6e');

  const handleColorChange = (color) => {
    setColorNote(color);
  };

  return (
    <Grid container spacing={{sm: 1, md: 3, lg: 6, xl: 12}} rowSpacing={5}>
      {notes.map((note) => (
        <Grid item xs={12} md={4} lg={4} xl={3} key={note.id}>
          <Note noteColor={note.noteColor}>
            <DeleteNote
              handleDelete={handleDelete}
              id={note.id}
              title={note.title}
              text={note.text}
              date={note.date}
              noteColor={note.noteColor}/>
          </Note>
        </Grid>
      ))}
      <Grid item>
        <Note noteColor={colorNote}>
          <AddNote
            handleAdd={handleAdd}
            handleColorChange={handleColorChange}
            noteLabelColor={noteLabelColor}
            setNoteLabelColor={setNoteLabelColor}/>
        </Note>
      </Grid>
    </Grid>
  );
};

export default NoteList;

NoteList.propTypes = {
  notes: PropTypes.array,
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func
};