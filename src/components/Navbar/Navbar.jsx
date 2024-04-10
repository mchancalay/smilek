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

  const handleAboutUsClick = () => {
    toggleMenu();
    const aboutUsSection = document.getElementById('aboutUs');
    const navbarHeight = document.querySelector('.nb').offsetHeight;
    const sectionPosition = aboutUsSection.offsetTop;
    const windowHeight = window.innerHeight;
    const offset = navbarHeight + 20;

    window.scrollTo({
      top: sectionPosition - offset,
      behavior: 'smooth',
    });
  };

  const handleTokenomicsClick = () => {
    toggleMenu();
    const tokenomicsSection = document.getElementById('tokenomics');
    const navbarHeight = document.querySelector('.nb').offsetHeight;
    const sectionPosition = tokenomicsSection.offsetTop;
    const windowHeight = window.innerHeight;
    const offset = navbarHeight;

    window.scrollTo({
      top: sectionPosition - offset,
      behavior: 'smooth',
    });
  };

  const handleRoadMapClick = () => {
    toggleMenu();
    const roadMapSection = document.getElementById('roadMap');
    const navbarHeight = document.querySelector('.nb').offsetHeight;
    const sectionPosition = roadMapSection.offsetTop;
    const windowHeight = window.innerHeight;
    const offset = navbarHeight + 20;

    window.scrollTo({
      top: sectionPosition - offset,
      behavior: 'smooth',
    });
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
                <a className='nb__item' onClick={handleAboutUsClick}>About us</a>
                <a className='nb__item' onClick={handleTokenomicsClick}>Tokenomics</a>
                <a className='nb__item' onClick={handleRoadMapClick}>Road map</a>
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
          <div className='nb__burger' onClick={toggleMenu}>
            <Burger />
          </div>
        </div>
      </Container>
      {isMenuOpen && (
        <div className='nbM'>
          <a className='nbM__item'>Home</a>
          <a className='nbM__item' onClick={handleAboutUsClick}>About us</a>
          <a className='nbM__item' onClick={handleTokenomicsClick}>Tokenomics</a>
          <a className='nbM__item' onClick={handleRoadMapClick}>Road map</a>
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