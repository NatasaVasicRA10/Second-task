import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './components/SignUp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/home' element={<App />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
