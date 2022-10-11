import './Search.css';
import React from 'react';

function Search({ onChange }) {

  return (
    <div className="Container">
      <button className="ButtonSearch"><i className="fa fa-search"></i></button>
      <input className="Input" onChange={onChange} placeholder="Search for your notes"/>
    </div>
  );
}

export default Search;

