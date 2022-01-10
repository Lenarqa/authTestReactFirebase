import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
          <h1>React Auth</h1>
          <div className={classes.links}>
            <NavLink to="/auth">Login</NavLink>  
            <NavLink to="/profile">Profile</NavLink>  
            <NavLink to="/logout">Logout</NavLink>  
          </div>
        </header>
    );
};

export default Header;