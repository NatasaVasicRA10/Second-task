import React from 'react';
// import { FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  useColorMode,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Header = ({sortType, handleSort, /*startDate, setStartDate, endDate, setEndDate,*/ handleResetNotes}) => {

  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  // const NewIcon = () => {
  //   return sortType === 'descending' ? <FaSortAmountDown/> : < FaSortAmountUp/>;
  // };

  const sortItems = [
    {id: 1, title: 'ASCENDING', content: 'ascending'},
    {id: 2, title: 'DESCENDING', content: 'descending'}
  ];

  const logout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <GridItem className='ButtonItemSignOut'>
        <Button className='ButtonToggle ButtonSignOut' onClick={logout}>Sign out</Button>
      </GridItem>
      <GridItem>
        <h1><span className='Title'>React</span> Notes</h1>
      </GridItem>
      <GridItem className='ButtonItem'>
        <Button className='ButtonToggle' onClick={toggleColorMode}>Toggle Mode {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      </GridItem>
      <GridItem>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='Start date'
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <Input {...params} className='CustomDatePicker'/>}/>
        </LocalizationProvider> */}
      </GridItem>
      <GridItem>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='End date'
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <Input {...params} className='CustomDatePicker'/>}/>
        </LocalizationProvider> */}
      </GridItem>
      <GridItem>
        <Button className='ButtonReset' onClick={handleResetNotes}>Reset</Button>
      </GridItem>
      <GridItem className='SelectItem'>
        <Menu>
          <MenuButton as={Button} value={sortType} rightIcon={<ChevronDownIcon />} onClick={handleSort}>
            Actions
          </MenuButton>
          <MenuList>
            {sortItems.map((sortItem) => (
              <MenuItem key={sortItem.id} value={sortItem.content}>
                {sortItem.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
};

export default Header;

Header.propTypes = {
  toggleTheme: PropTypes.func,
  sortType: PropTypes.string,
  handleSort: PropTypes.func,
  startDate: PropTypes.any,
  setStartDate: PropTypes.func,
  endDate: PropTypes.any,
  setEndDate: PropTypes.func,
  handleResetNotes: PropTypes.func
};