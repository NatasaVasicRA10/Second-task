import './App.css';
import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import NoteList from './components/NoteList';


function App() {

  return (
    <div className="App">
      <div className="Header"><Header/></div>
      <div className="Search"><Search/></div>
      <div className="AppNote"><NoteList></NoteList></div>
    </div>
  );
}

export default App;
