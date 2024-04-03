import React from 'react'
import { Container } from '@mui/material'
import telegram from '../../assets/telegram.png'
import x from '../../assets/x.png'
import birdeye from '../../assets/birdeye.png'

const Footer = () => {
    return (
        <footer className='fter'>
            {/*            <div class="custom-shape-divider-top-1712005195">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div> */}
            <Container maxWidth="lg">
                <div className='fter__container'>
                    <div className='fter__text'>
                        <p className='fter__copy'>Copyright 2024 $SMILEK</p>
                        <p className='fter__copy'>Powered by SmileK</p>
                    </div>
                    <ul className='fter__socials'>
                        <li className='fter__item'>
                            <img className='fter__item' src={x} alt="" />
                        </li>
                        <li className='fter__item'>
                            <img className='fter__item' src={telegram} alt="" />
                        </li>
                        <li className='fter__item'>
                            <img className='fter__item' src={telegram} alt="" />
                        </li>
                        <li className='fter__item'>
                            <img className='fter__item' src={birdeye} alt="" />
                        </li>
                    </ul>
                    <div className='fter__up'>
                        <p className='fter__btn'>asd</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer