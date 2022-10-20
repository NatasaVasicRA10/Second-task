import React from 'react';
import Grid from '@mui/material/Grid';
import { FaSortAmountUp } from 'react-icons/fa';
import { FaSortAmountDown } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Header = ({toggleTheme,sortType,handleSort}) => {

    const NewIcon = () => {
      return sortType === "descending" ? <FaSortAmountDown/> : < FaSortAmountUp/>;
    };

    const sortItems = [
      {id: 1, title: 'ASCENDING', content: 'ascending'},
      {id: 2, title: 'DESCENDING', content: 'descending'}
    ];

    return (     
      <Grid container spacing={1}>
          <Grid item xs={4}>
            <h1><span className="Title">React</span> Notes</h1>
          </Grid>
          <Grid item xs={5}>
          </Grid>
          <Grid item className="ButtonItem" xs={3}>
            <button className="ButtonToggle" onClick={toggleTheme}>Toggle Mode</button>
          </Grid>
          <Grid item className="SelectItem" xs={12}>
            <FormControl className="FormControl" variant="standard">               
              <Select
                displayEmpty
                value={sortType}
                onChange={handleSort}
                disableUnderline  
                IconComponent = {NewIcon} 
                className="Select"                      
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
    );
}

export default Header;