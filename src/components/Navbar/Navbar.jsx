import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import x from '../../assets/x.png'
import birdeye from '../../assets/birdeye.png'
import { Container } from '@mui/material'
import ButtonImage from '../ButtonImage/ButtonImage'
import NavbarLink from '../NavbarLink/NavbarLink'
import { xLink, birdeyeLink, telegramENLink, telegramESLink } from '../../js/vars';

const Navbar = props => {

  const [isScrolling, setIsScrolling] = useState(false);
  
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
          <div className='nb__left'>
            <img className='nb__logo' src={logo} alt="" />
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
      </Container>
    </div>
  )
}

export default Navbar