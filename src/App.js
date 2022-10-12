import './App.css';
import React, { useState }from 'react';
import Header from './components/Header';
import Search from './components/Search';
import NoteList from './components/NoteList';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function App() {

  const [query, setQuery] = useState(null);

  const searchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }} mx={12} mt={6} mb={6}>
    <Grid container spacing={4}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <Search onChange={searchChange}></Search>
        </Grid>
        <Grid item xs={12}>
          <NoteList query={query}></NoteList>
        </Grid>
    </Grid>
    </Box>
  );
}

export default App;
