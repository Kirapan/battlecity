import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Layout.css';

const layout = (props) => ( 
    <>
      <NavBar />
      <main className='content'>
        {props.children}
      </main>
    </>
);

export default layout;