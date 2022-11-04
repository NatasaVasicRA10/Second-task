import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import PropTypes from 'prop-types';

export const AuthContext = createContext([]);

const AuthUserProvider = (props) => {

  const [ user, setUser ] = useState({
    userData: null
  });

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(loggedUser => {
      if (loggedUser) {
        setUser({
          userData: loggedUser
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