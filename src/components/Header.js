import React from 'react';
import Grid from '@mui/material/Grid';
import { FaSortAmountUp } from 'react-icons/fa';
import { FaSortAmountDown } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Header = ({toggleTheme,sortType,handleSort,startDate,setStartDate,endDate,setEndDate,handleResetNotes}) => {

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
        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} className="CustomDatePicker"/>}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End date"
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} className="CustomDatePicker"/>}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2}>
          <button className="ButtonReset" onClick={handleResetNotes}>Reset</button>
        </Grid>
        <Grid item className="SelectItem" xs={6}>
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