import './Search.css';
import React, { useState } from 'react';

function Search() {
    const [query, setQuery] = useState("")

    const data = [
        {
            id: 1,
            text: "Moja prva beleska"
        },
        {
            id: 2,
            text: "Druga beleska"
        },
        {
            id: 3,
            text: "tri"
        }
    ];
  
    return (
        <div className="Container">
        <button className="ButtonSearch"><i className="fa fa-search"></i></button>
        <input className="Input" placeholder="Search for your notes" onChange={event => setQuery(event.target.value)} />
        {
          /*
            data.filter(note => {
                if (query === '') {
                  return note;
                } else if (note.text.toLowerCase().includes(query.toLowerCase())) {
                  return note;
                }
              }).map((note) => (
                <div key={note.id}>
                  <p>{note.text}</p>
                </div>
              )) */
        } 
        </div>
    );
}

export default Search;

