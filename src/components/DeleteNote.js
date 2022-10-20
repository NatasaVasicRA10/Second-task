import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const DeleteNote = ({handleDelete, id, title, text, date, noteColor}) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormLabel className="NoteTitle">
                    {title}
                </FormLabel>
            </Grid>
            <Grid item className="NoteHeight" xs={12}>
                <FormLabel className="NoteText">
                    {text}
                </FormLabel>
            </Grid>
            <Grid item className="DatePosition" xs={6}>
                <FormLabel className="NoteDate">
                    {date}
                </FormLabel>
            </Grid>
            <Grid item className="DeleteButtonPosition" xs={5}>
                <button className="DeleteButton" style ={{backgroundColor: noteColor}} onClick={() => handleDelete(id)}><DeleteForeverIcon/></button>
            </Grid>
        </Grid>
    );

}

export default DeleteNote;