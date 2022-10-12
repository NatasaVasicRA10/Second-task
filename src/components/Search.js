import './Search.css';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

function Search({ onChange }) {

  return (
    <Box sx={{ display: "flex", alignItems: "center" }} className="ItemSearch">
      <Grid container>
            <Grid item display="flex" justifyContent="center" alignItems="center">
              <SearchIcon/>
            </Grid>
            <Grid item display="flex" justifyContent="flex-start" mx={1} xs={11}>
              <TextField style ={{width: "100%"}} InputProps={{ disableUnderline: true }} onChange={onChange} placeholder="Search for your notes" variant="standard" />
            </Grid>
      </Grid>
    </Box>
  );
}

export default Search;

