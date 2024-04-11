import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import x from '../../assets/x.png'
import redirect from '../../assets/redirectBlack.png'
import dexScreener from '../../assets/dexScreener.png'
import { Container } from '@mui/material'
import NavbarLink from '../NavbarLink/NavbarLink'
import { xLink, dexScreenerLink, telegramENLink, telegramESLink } from '../../js/vars';
import Burger from '../Burger/Burger'

const Navbar = () => {

  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';

  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (isMenuOpen) {
      toggleMenu();
    }

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
          <img className='nb__logo' src={logo} alt="" onClick={() => scrollToSection('home')} />
          <div className='nb__desktop'>
            <div className='nb__left'>
              <div className='nb__items'>
                <a className='nb__item' onClick={() => scrollToSection('home')}>Home</a>
                <a className='nb__item' onClick={() => scrollToSection('aboutUs')}>About us</a>
                <a className='nb__item' onClick={() => scrollToSection('tokenomics')}>Tokenomics</a>
                <a className='nb__item' onClick={() => scrollToSection('roadMap')}>Road map</a>
              </div>
            </div>
            <div className='nb__right'>
              <div className='nb__links'>
                <NavbarLink surce={x} name={'x.com'} link={xLink} />
                <NavbarLink surce={telegram} name={'Telegram English'} link={telegramENLink} english={true} />
                <NavbarLink surce={telegram} name={'Telegram Español'} link={telegramESLink} spanish={true} />
                <NavbarLink surce={dexScreener} name={'DEX Screener'} link={dexScreenerLink} />
              </div>
            </div>
          </div>
          <div className='nb__burger'>
            <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </Container>
      {isMenuOpen && (
        <div className='nbM'>
          <a className='nbM__item' onClick={() => scrollToSection('home')}>Home</a>
          <a className='nbM__item' onClick={() => scrollToSection('aboutUs')}>About us</a>
          <a className='nbM__item' onClick={() => scrollToSection('tokenomics')}>Tokenomics</a>
          <a className='nbM__item' onClick={() => scrollToSection('roadMap')}>Road map</a>
          <a className='nbM__item' onClick={() => window.open(xLink, '_blank')}>
            x.com
            <img className='nbM__redirect' src={redirect} alt="" />
          </a>
          <a className='nbM__item' onClick={() => window.open(telegramENLink, '_blank')}>
            Telegram English
            <img className='nbM__redirect' src={redirect} alt="" />
          </a>
          <a className='nbM__item' onClick={() => window.open(telegramESLink, '_blank')}>
            Telegram Español
            <img className='nbM__redirect' src={redirect} alt="" />
          </a>
          <a className='nbM__item' onClick={() => window.open(dexScreenerLink, '_blank')}>
            DEX Screener
            <img className='nbM__redirect' src={redirect} alt="" />
          </a>
        </div>
      )}

    </div>
  )
}

export default Navbar