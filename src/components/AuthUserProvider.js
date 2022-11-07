import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import PropTypes from 'prop-types';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext([]);

const AuthUserProvider = (props) => {

  const [ user, setUser ] = useState({});

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, loggedUser => {
      setUser(loggedUser);
    });
    return () => {
      subscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthUserProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthUserProvider.propTypes = {
  children: PropTypes.any
};