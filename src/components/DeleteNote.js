import './DeleteNote.css';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const DeleteNote = ({handleDelete, id, title, text, date, noteColor}) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="flex-start">
                <FormLabel 
                    sx={{ 
                        whiteSpace: "wrap", 
                        textOverflow: "ellipsis", 
                        overflow: "hidden",
                        wordBreak: "break-all",
                        marginLeft: "5%",
                        marginRight: "5%",
                        color: "black",
                        fontSize: "24px"
                    }}
                    >
                    {title}
                </FormLabel>
            </Grid>
            <Grid item xs={12} height="240px" display="flex" justifyContent="flex-start">
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
                    {text}
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
                    {date}
                </FormLabel>
            </Grid>
            <Grid item display="flex" justifyContent="flex-end" alignItems="center" xs={5}>
                <button style ={{backgroundColor: noteColor, border: "none", cursor: "pointer"}} onClick={() => handleDelete(id)}><DeleteForeverIcon/></button>
            </Grid>
        </Grid>
      </Box>
    );

}

export default DeleteNote;