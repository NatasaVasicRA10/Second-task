import './Note.css';
import React from 'react';

function Note(props) {

    return (
        <div className="Note">
            {props.children}
        </div>
    );
}

export default Note;