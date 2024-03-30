import React from 'react'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import x from '../../assets/x.png'
import birdeye from '../../assets/birdeye.png'
import { Container } from '@mui/material'
import ButtonImage from '../ButtonImage/ButtonImage'
import NavbarLink from '../NavbarLink/NavbarLink'
import { xLink, birdeyeLink, telegramLink } from '../../js/vars';

const Navbar = props => {

  return (
      <div className={`nb`}>
        <Container maxWidth="xl">
          <div className='nb__container'>
            <div className='nb__left'>
              <img className='nb__logo' src={logo} alt="" />
              <div className='nb__items'>
                <a className='nb__item'>Home</a>
                <a className='nb__item'>About us</a>
                <a className='nb__item'>Road map</a>
                <a className='nb__item'>Tokenomics</a>
                <a className='nb__item'>Community</a>
              </div>
            </div>
            <div className='nb__right'>
              <div className='nb__links'>
                <NavbarLink surce={x} name={'x.com'} link={xLink} />
                <NavbarLink surce={telegram} name={'Telegram'} link={telegramLink} />
                <NavbarLink surce={birdeye} name={'Birdeye'} link={birdeyeLink} />
              </div>
              <ButtonImage />
            </div>
          </div>
        </Container>
      </div>
  )
}

export default Navbar