import './Header.css';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FaSortAmountUp } from 'react-icons/fa';
import { FaSortAmountDown } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Header = ({sortType,setSortType}) => {
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

    const sortChange = (event) => {
      setSortType(event.target.value);
    };

    const NewIcon = () => {
      return sortType === "descending" ? <FaSortAmountDown style={{ pointerEvents: "none" }}/> : < FaSortAmountUp style={{ pointerEvents: "none" }}/>;
    };

    const sortItems = [
      {id: 1, title: 'None', content: ''},
      {id: 2, title: 'ASCENDING', content: 'ascending'},
      {id: 3, title: 'DESCENDING', content: 'descending'}
    ];

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
            <Grid item display="flex" justify-content="flex-start" xs={4}>
              <h1><span className="Title">React</span> Notes</h1>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item display="flex" justifyContent="flex-end" alignItems="center" xs={3}>
              <button className="ButtonToggle" onClick={toggleTheme}>Toggle Mode</button>
            </Grid>
            <Grid item display="flex" justifyContent="flex-end" alignItems="center" xs={12}>
              <FormControl sx={{ 
                                backgroundColor: "#E7E7E7",
                                border: "4px solid #008055",
                                fontSize: "16px",
                                borderRadius: "20px",
                                width: "15%",
                                cursor: "pointer",
                                height: "75%"
                              }} variant="standard">               
                <Select
                  displayEmpty
                  value={sortType}
                  onChange={(event) => sortChange(event)}
                  disableUnderline  
                  IconComponent = {NewIcon} 
                  sx={{ 
                    paddingLeft: "5%",
                    paddingRight: "5%"
                  }}                       
                >
                  {sortItems.map((sortItem) => ( 
                    <MenuItem key={sortItem.id} value={sortItem.content}>
                      {sortItem.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
        </Grid>
      </Box>
    );
}

export default Header;