import React from 'react';
import PropTypes from 'prop-types';

const Note = (props) => {

  return (
    <div className='Note' style ={{backgroundColor: props.noteColor}}>
      {props.children}
    </div>
  );
};

export default Note;

Note.propTypes = {
  noteColor: PropTypes.string,
  children: PropTypes.any,
};