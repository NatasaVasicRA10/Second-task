import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import PropTypes from 'prop-types';

export const AuthContext = createContext([]);

const AuthUserProvider = (props) => {

  const [ user, setUser ] = useState({
    isLoggedIn: false,
    isLoading: true,
    userData: undefined
  });

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(loggedUser => {
      if (loggedUser) {
        setUser({
          isLoggedIn: true,
          isLoading: false,
          userData: loggedUser,
        });
      } else {
        setUser({
          isLoggedIn: false,
          isLoading: true,
          userData: undefined
        });
      }
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