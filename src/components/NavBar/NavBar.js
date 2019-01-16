import React from 'react';
import Logo from './Logo/Logo';
import './NavBar.css';

const navBar = (props) => ( 
    <div className='NavBar'>
      <div className='LeaderBoard'>Leader Board</div>
      <Logo />
      <div>
        <span>Signup</span>
        <span>Login</span>
      </div>
    </div>
);

export default navBar;