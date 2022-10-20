import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


const Search = ({handleSearch}) => {

  return (
    <Box className="SearchBox">
      <Grid container>
            <Grid item className="SearchIcon">
              <SearchIcon/>
            </Grid>
            <Grid item mx={1} xs={11}>
              <TextField className="SearchField" InputProps={{ disableUnderline: true }} onChange={handleSearch} placeholder="Search for your notes" variant="standard" />
            </Grid>
      </Grid>
    </Box>
  );
}

export default Search;

