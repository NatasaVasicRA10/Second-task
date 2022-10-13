import './AddNote.css';
import React, {useState} from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';


const AddNote = ({handleClick}) => {
    
    const [count, setCount] = useState(300);
    const [text, setText]= useState("");

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} height="200px" display="flex" justifyContent="center">
            <TextareaAutosize
                minRows={9}
                placeholder="Type to add a new note..."
                className="TextArea"
                fontFamily="'Roboto Medium', sans-serif"
                maxLength={300} 
                value={text} 
                onChange={(e) => {setCount(300-e.target.value.length) || setText(e.target.value)}}
                />
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
                <button className="ButtonAdd" onClick={() => handleClick(text) || setText("") || setCount(300)}>Save</button>
            </Grid>
        </Grid>
      </Box>
    );
}

export default AddNote;