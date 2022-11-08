import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const DeleteNote = ({handleDelete, id, title, text, date, noteColor, handleEdit}) => {

  const [ edit, setEdit ]= useState(false);
  const [ editTitle, setEditTitle ]= useState(title);
  const [ editText, setEditText ]= useState(text);

  return (
    <div>
      {edit ? (
        <form onSubmit={(e) => handleEdit(e, id, editTitle, editText, date, noteColor) || setEdit(!edit)}>
          <Grid container spacing={2}>
            <Grid item className='AddNoteItem' xs={12}>
              <TextField
                className='AddNoteTextField'
                defaultValue={editTitle}
                required={true}
                variant='standard'
                InputProps={{disableUnderline: true, style: {fontSize: 24, background: 'white'}}}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}/>
            </Grid>
            <Grid item className='AddNoteItem' xs={12}>
              <TextareaAutosize
                minRows={10}
                className='AddNoteTextArea'
                maxLength={300}
                required={true}
                defaultValue={editText}
                onChange={(e) => {
                  setEditText(e.target.value);
                }}/>
            </Grid>
            <Grid item className='DeleteButtonPosition' xs={12}>
              <button className='EditButton'>
                Edit
              </button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormLabel className='NoteTitle'>
              {editTitle}
            </FormLabel>
          </Grid>
          <Grid item className='NoteHeight' xs={12}>
            <FormLabel className='NoteText'>
              {editText}
            </FormLabel>
          </Grid>
          <Grid item className='DatePosition' xs={6}>
            <FormLabel className='NoteDate'>
              {date}
            </FormLabel>
          </Grid>
          <Grid item className='DeleteButtonPosition' xs={5}>
            <button className='DeleteButton' style ={{backgroundColor: noteColor}} onClick={() => setEdit(!edit)}>
              <EditIcon/>
            </button>
            <button className='DeleteButton' style ={{backgroundColor: noteColor}} onClick={() => handleDelete(id)}>
              <DeleteForeverIcon/>
            </button>
          </Grid>
        </Grid>
      )}
    </div>
  );

};

export default DeleteNote;

DeleteNote.propTypes = {
  handleDelete: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.any,
  noteColor: PropTypes.string,
  handleEdit: PropTypes.func
};