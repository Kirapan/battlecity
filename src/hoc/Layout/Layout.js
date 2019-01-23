import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './Layout.css';

const layout = (props) => ( 
    <>
      <NavBar />
      <main className='content'>
        {props.children}
      </main>
      <Footer />
    </>
);

export default layout;