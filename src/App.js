import './App.css';
import React, { useState, useEffect }from 'react';
import Header from './components/Header';
import Search from './components/Search';
import NoteList from './components/NoteList';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { format } from "date-fns";


function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [theme, setTheme] = useState('light');
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("ascending");

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleAdd = (event,text,noteColor,title) => {   
    event.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1;

    var note = {
        id:id,
        title:title,
        text:text,
        date:format(new Date(), "MM/dd/yyyy"),
        noteColor:noteColor
    }

    const listNotes = [...notes, note];
    setNotes(listNotes);
  };

  const handleDelete = (id) => {       
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div  style={theme==="light" ? {backgroundColor: "#fff",color: "#333"} : {backgroundColor: "#333",color: "#fff"}}>
      <Box sx={{ flexGrow: 1 }} mx={12} mt={6} mb={6}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header toggleTheme={toggleTheme} sortType={sortType} handleSort={handleSort}/>
            </Grid>
            <Grid item xs={12}>
              <Search handleSearch={handleSearch}></Search>
            </Grid>
            <Grid item xs={12}>
              <NoteList 
                notes={query!=="" ? notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()) 
                  || note.text.toLowerCase().includes(query.toLowerCase())) : 
                  sortType === "ascending" ?  notes : 
                  notes.slice().sort((a, b) => {return new Date(b.date) - new Date(a.date); })}
                handleAdd={handleAdd} 
                handleDelete={handleDelete}>
              </NoteList>
            </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
