import './Header.css';
import React, { useState, useEffect } from 'react';

function Header() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return (
      <div>
        <h1><span className="Title">React</span> Notes</h1>
        <button className="ButtonToggle" onClick={toggleTheme}>Toggle Mode</button>
      </div>
    );
}

export default Header;