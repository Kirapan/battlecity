import React from 'react';
import Tank from '../../../assets/images/tank3.png';
import './Logo.css';

const logo = (props) => ( 
    <div className='Logo'>
      <img src={Tank} alt='Battle City' />
    </div>
);

export default logo;