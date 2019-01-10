import React from 'react';
import Logo from './Logo/Logo';
import './NavBar.css';

const navBar = (props) => ( 
    <div className='NavBar'>
      <div>Leader Board</div>
      <Logo />
    </div>
);

export default navBar;