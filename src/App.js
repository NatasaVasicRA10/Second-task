import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PrivateRoutes from './components/PrivateRoutes';
import HomePage from './components/HomePage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
