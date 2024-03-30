import React from 'react'
import Navbar from '../Navbar/Navbar'
import bg from '../../assets/bg.png';
import HeaderContent from '../HeaderContent/HeaderContent';

const Header = () => {
  return (
    <div className='header'>
        <Navbar/>
        <HeaderContent/>
    </div>
  )
}

export default Header