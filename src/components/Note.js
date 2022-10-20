import React from 'react';

const Note = (props) => {

    return (
        <div className="Note" style ={{backgroundColor: props.noteColor}}>
            {props.children}
        </div>
    );
}

export default Note;