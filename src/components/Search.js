import './Search.css';
import React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

function Search({ onChange }) {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} className="ItemSearch">
        <SearchIcon/>
        <TextField InputProps={{ disableUnderline: true }} onChange={onChange} placeholder="Search for your notes" variant="standard" />
    </Box>
  );
}

export default Search;

