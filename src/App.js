import './App.css';
import React, { useState }from 'react';
import Header from './components/Header';
import Search from './components/Search';
import NoteList from './components/NoteList';


function App() {

  const [query, setQuery] = useState(null);

  const searchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <div className="Header"><Header/></div>
      <div className="Search"><Search onChange={searchChange}></Search></div>   
      <div className="AppNote"><NoteList query={query}></NoteList></div>
    </div>
  );
}

export default App;
