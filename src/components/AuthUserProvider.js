import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import PropTypes from 'prop-types';

export const AuthContext = createContext([]);

const AuthUserProvider = (props) => {

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(loggedUser => {
      if (loggedUser) {
        setUser(loggedUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      subscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={[ user, setUser ]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthUserProvider;

AuthUserProvider.propTypes = {
  children: PropTypes.any
};