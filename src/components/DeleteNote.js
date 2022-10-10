import './DeleteNote.css';

function DeleteNote(props) {

    return (
        <div>
            <label className="LabelText">{props.text}</label>
            <label className="LabelDate">{props.date}</label>
            <button className="ButtonDelete" onClick={() => props.handleDelete(props.id)}><i className="fa fa-trash fa-2x"></i></button>
        </div>
    );

}

export default DeleteNote;