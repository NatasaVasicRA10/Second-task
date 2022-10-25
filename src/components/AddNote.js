import React, {useState} from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import { CirclePicker } from 'react-color';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const AddNote = ({handleAdd, handleColorChange, noteLabelColor, setNoteLabelColor}) => {

  const [ count, setCount ] = useState(300);
  const [ text, setText ]= useState('');
  const [ noteColor, setNoteColor ]= useState('#d4b055');
  const [ title, setTitle ]= useState('');

  const colorList = [ '#d4b055', '#ed8c77', '#c187d6', '#39d0db', '#e2fa84' ];

  const handleChangleLabelColor = (color) => {
    if (color==='#d4b055') {
      setNoteLabelColor('#f5cf6e');
    } else if (color==='#ed8c77') {
      setNoteLabelColor('#faa28e');
    } else if (color==='#c187d6') {
      setNoteLabelColor('#dfa2f5');
    } else if (color==='#39d0db') {
      setNoteLabelColor('#74eef7');
    } else if (color==='#e2fa84') {
      setNoteLabelColor('#e6f5ab');
    }
  };

  return (
    <form onSubmit={(e) => handleAdd(e, text, noteColor, title) || setTitle('') || setText('') || setCount(300)}>
      <Grid container spacing={2}>
        <Grid item className='AddNoteItem' xs={12}>
          <TextField
            placeholder='Type to add a title...'
            className='AddNoteTextField'
            value={title}
            required={true}
            variant='standard'
            InputProps={{disableUnderline: true}}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            style ={{backgroundColor: noteLabelColor}}/>
        </Grid>
        <Grid item className='AddNoteItem' xs={12}>
          <TextareaAutosize
            minRows={10}
            placeholder='Type to add a new note...'
            className='AddNoteTextArea'
            maxLength={300}
            required={true}
            value={text}
            onChange={(e) => {
              setCount(300-e.target.value.length) || setText(e.target.value);
            }}
            style ={{backgroundColor: noteLabelColor}}/>
        </Grid>
        <Grid item className='AddNoteCircleColor' xs={12}>
          <CirclePicker colors={colorList} onChange={targetColor => {
            setNoteColor(targetColor.hex); handleColorChange(targetColor.hex);
            handleChangleLabelColor(targetColor.hex);
          }}/>
        </Grid>
        <Grid item className='AddNoteCircleColor' xs={6}>
          <FormLabel className='AddNoteCount'>
            {count} Remaining
          </FormLabel>
        </Grid>
        <Grid item className='AddButtonPosition' mx={2} xs={4}>
          <button className='AddButton'>Save</button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddNote;

AddNote.propTypes = {
  handleAdd: PropTypes.func,
  handleColorChange: PropTypes.func,
  noteLabelColor: PropTypes.string,
  setNoteLabelColor: PropTypes.func
};