import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import x from '../../assets/x.png'
import birdeye from '../../assets/birdeye.png'
import { Container } from '@mui/material'
import NavbarLink from '../NavbarLink/NavbarLink'
import { xLink, birdeyeLink, telegramENLink, telegramESLink } from '../../js/vars';
import Burger from '../Burger/Burger'

const Navbar = () => {

  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nb ${isScrolling ? 'nb--scrolling' : ''}`}>
      <Container maxWidth="xl">
        <div className='nb__container'>
          <img className='nb__logo' src={logo} alt="" />
          <div className='nb__desktop'>
            <div className='nb__left'>
              <div className='nb__items'>
                <a className='nb__item'>Home</a>
                <a className='nb__item'>About us</a>
                <a className='nb__item'>Tokenomics</a>
                <a className='nb__item'>Road map</a>
              </div>
            </div>
            <div className='nb__right'>
              <div className='nb__links'>
                <NavbarLink surce={x} name={'x.com'} link={xLink} />
                <NavbarLink surce={telegram} name={'Telegram English'} link={telegramENLink} english={true} />
                <NavbarLink surce={telegram} name={'Telegram Español'} link={telegramESLink} spanish={true} />
                <NavbarLink surce={birdeye} name={'Birdeye'} link={birdeyeLink} />
              </div>
            </div>
          </div>
          <div className='nb__burger' onClick={toggleMenu}>
            <Burger />
          </div>
        </div>
      </Container>
      {isMenuOpen && (
        <div className='nbM'>
          <a className='nbM__item'>Home</a>
          <a className='nbM__item'>About us</a>
          <a className='nbM__item'>Tokenomics</a>
          <a className='nbM__item'>Road map</a>
          <a className='nbM__item'>x.com</a>
          <a className='nbM__item'>Telegram English</a>
          <a className='nbM__item'>Telegram Español</a>
          <a className='nbM__item'>Birdeye</a>
        </div>
      )}

    </div>
  )
}

export default Navbar