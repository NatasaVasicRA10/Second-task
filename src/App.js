import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
// import Search from './components/Search';
// import NoteList from './components/NoteList';
import { Box, Grid, GridItem } from '@chakra-ui/react';
// import { format } from 'date-fns';

const App = () => {

  // const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  // const [ query, setQuery ] = useState('');
  const [ sortType, setSortType ] = useState('ascending');
  const [ startDate, setStartDate ] = useState(null);
  const [ endDate, setEndDate ] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(notes));
  // }, [notes]);

  // const handleAdd = (e, text, noteColor, title) => {
  //   e.preventDefault();
  //   const id = notes.length ? notes[notes.length - 1].id + 1 : 1;

  //   const note = {
  //     id: id,
  //     title: title,
  //     text: text,
  //     date: format(new Date(), 'MM/dd/yyyy'),
  //     noteColor: noteColor
  //   };

  //   const listNotes = [ ...notes, note ];
  //   setNotes(listNotes);
  // };

  // const handleDelete = (id) => {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  // };

  // const handleSearch = (e) => {
  //   setQuery(e.target.value);
  // };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const handleResetNotes = () => {
    setStartDate(null);
    setEndDate(null);
  };

  // const handleNotes = () => {
  //   const newNotes = query === '' ? sortType === 'ascending' ? sortingAsc()
  //     : sortType === 'descending' ? sortingDes()
  //       : notes : search();
  //   return newNotes;
  // };

  // const search = () => {
  //   const newNotes = notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())
  //   || note.text.toLowerCase().includes(query.toLowerCase()));
  //   return newNotes;
  // };

  // const sortingAsc = () => {
  //   const newNotes = startDate !== null && endDate !== null ?
  //     ascDate().filter((note) => (new Date(note.date) >= startDate && new Date(note.date) <= endDate)) : ascDate();
  //   return newNotes;
  // };

  // const sortingDes = () => {
  //   const newNotes = startDate !== null && endDate !== null ?
  //     desDate().filter((note) => (new Date(note.date) >= startDate && new Date(note.date) <= endDate)) : desDate();
  //   return newNotes;
  // };

  // const ascDate = () => {
  //   const newNotes = notes.slice().sort((a, b) => {
  //     return new Date(a.date) - new Date(b.date);
  //   });
  //   return newNotes;
  // };

  // const desDate = () => {
  //   const newNotes = notes.slice().sort((a, b) => {
  //     return new Date(b.date) - new Date(a.date);
  //   });
  //   return newNotes;
  // };

  return (
    <Box sx={{ flexGrow: 1 }} mx={12} my={6}>
      <Grid
        templateAreas={`"header"
                        "search"
                        "noteList"`}
        gridTemplateRows={'200px 100px 1fr'}
        minH={'100vh'}
        gap='2'>
        <GridItem bg='orange.300' area={'header'}>
            Header
          <Header
            sortType={sortType}
            handleSort={handleSort}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            handleResetNotes={handleResetNotes}/>
        </GridItem>
        <GridItem bg='pink.300' area={'search'}>
          Search
          {/* <Search handleSearch={handleSearch}></Search> */}
        </GridItem>
        <GridItem bg='blue.300' area={'noteList'}>
          Note list
          {/* <NoteList
            notes={handleNotes()}
            handleAdd={handleAdd}
            handleDelete={handleDelete}>
          </NoteList> */}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
