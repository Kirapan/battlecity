import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard';
import Login from '../../containers/Login/Login';

const layout = (props) => ( 
    <>
      <NavBar />
      <LeaderBoard />
      <Login />
      <main className='content'>
        {props.children}
      </main>
    </>
);

export default layout;