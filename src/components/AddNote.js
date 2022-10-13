import './AddNote.css';
import React, {useState} from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import { CirclePicker } from 'react-color';


const AddNote = ({handleClick}) => {
    
    const [count, setCount] = useState(300);
    const [text, setText]= useState("");
    const [noteColor, setNoteColor]= useState("#d4b055");

    const colorList = ['#d4b055','#ed8c77', '#c187d6', '#39d0db', '#e3f59d']

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} height="200px" display="flex" justifyContent="center">
            <TextareaAutosize
                minRows={10}
                placeholder="Type to add a new note..."
                className="TextArea"
                fontFamily="'Roboto Medium', sans-serif"
                maxLength={300} 
                value={text} 
                onChange={(e) => {setCount(300-e.target.value.length) || setText(e.target.value)}}
                />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="flex-start" marginLeft="5%" marginTop="1%">
                <CirclePicker colors={colorList} onChange={targetColor => setNoteColor(targetColor.hex)}/>
            </Grid>
            <Grid item display="flex" justifyContent="flex-start" marginLeft="5%" xs={6}>
                <FormLabel  
                    sx={{
                        maxWidth: 200, 
                        color: "black"
                    }}
                    >
                    {count} Remaining
                </FormLabel>
            </Grid>
            <Grid item display="flex" justifyContent="flex-end" mx={2} height="100%" xs={4}>
                <button className="ButtonAdd" onClick={() => handleClick(text, noteColor) || setText("") || setCount(300)}>Save</button>
            </Grid>
        </Grid>
      </Box>
    );
}

export default AddNote;