import './AddNote.css';
import React, {useState} from 'react';

function AddNote({handleClick}) {
    const [count, setCount] = useState(300);
    const [text, setText]= useState("");

    return (
        <div className="AddNote">
            <textarea className="TextArea" maxLength={300} value={text} onChange={(e) => {setCount(300-e.target.value.length) || setText(e.target.value)}} placeholder="Type to add a new note..."></textarea>
            <p className="Count">{count} Remaining</p>
            <button className="ButtonAdd" onClick={() => handleClick(text) || setText("") || setCount(300)}>Save</button>
        </div>
    );
}

export default AddNote;