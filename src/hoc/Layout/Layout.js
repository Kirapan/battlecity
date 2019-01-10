import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard';

const layout = (props) => ( 
    <>
      <NavBar />
      <LeaderBoard />
      <main className='content'>
        {props.children}
      </main>
    </>
);

export default layout;