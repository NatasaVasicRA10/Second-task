import './DeleteNote.css';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const DeleteNote = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} height="200px" display="flex" justifyContent="flex-start">
                <FormLabel  
                    sx={{ 
                        whiteSpace: "wrap", 
                        textOverflow: "ellipsis", 
                        overflow: "hidden",
                        wordBreak: "break-all",
                        marginLeft: "5%",
                        marginRight: "5%",
                        color: "black"
                    }}
                    >
                    {props.text}
                </FormLabel>
            </Grid>
            <Grid item display="flex" justifyContent="flex-start" marginLeft="5%" xs={6}>
                <FormLabel  
                    sx={{ 
                        whiteSpace: "nowrap", 
                        textOverflow: "ellipsis", 
                        overflow: "hidden",
                        color: "black"
                    }}
                    >
                    {props.date}
                </FormLabel>
            </Grid>
            <Grid item display="flex" justifyContent="flex-end" alignItems="center" xs={5}>
                <button className="ButtonDelete" onClick={() => props.handleDelete(props.id)}><DeleteForeverIcon/></button>
            </Grid>
        </Grid>
      </Box>
    );

}

export default DeleteNote;