import './Header.css';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
            <Grid item display="flex" justify-content="flex-start" xs={4}>
              <h1><span className="Title">React</span> Notes</h1>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item display="flex" justifyContent="flex-end" alignItems="center" xs={3}>
              <button className="ButtonToggle" onClick={toggleTheme}>Toggle Mode</button>
            </Grid>
        </Grid>
      </Box>
    );
}

export default Header;