import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

const layout = (props) => ( 
    <>
      <NavBar />
      <main className='content'>
        {props.children}
      </main>
    </>
);

export default layout;