import './AddNote.css';
import React, {useState} from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import { CirclePicker } from 'react-color';
import TextField from '@mui/material/TextField';


const AddNote = ({handleAdd}) => {
    
    const [count, setCount] = useState(300);
    const [text, setText]= useState("");
    const [noteColor, setNoteColor]= useState("#d4b055");
    const [title, setTitle]= useState("");

    const colorList = ['#d4b055','#ed8c77', '#c187d6', '#39d0db', '#e3f59d']

    return (
        <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={(event) => handleAdd(event,text, noteColor,title) || setTitle("") || setText("") || setCount(300)}>
            <Grid container spacing={2}>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <TextField 
                        placeholder="Type to add a title..." 
                        className="TextField"
                        value={title}
                        required={true}
                        variant="standard"
                        InputProps={{disableUnderline: true}}
                        onChange={(e) => {setTitle(e.target.value)}}/>
                </Grid>
                <Grid item xs={12} height="200px" display="flex" justifyContent="center">
                    <TextareaAutosize
                        minRows={10}
                        placeholder="Type to add a new note..."
                        className="TextArea"
                        maxLength={300} 
                        required={true}
                        value={text} 
                        onChange={(e) => {setCount(300-e.target.value.length) || setText(e.target.value)}}/>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="flex-start" marginLeft="6%" marginTop="1%">
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
                    <button className="ButtonAdd">Save</button>
                </Grid>
            </Grid>
        </form>
        </Box>
    );
}

export default AddNote;