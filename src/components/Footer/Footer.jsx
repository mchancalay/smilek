import React from 'react';
import { Container, Grid } from '@mui/material';
import Curves from '../Curves/Curves';
import { xLink, birdeyeLink, telegramENLink, telegramESLink, cmcLink, coinGeckoLink, geckoTerminalLink, dexScreenerLink } from '../../js/vars';

const Footer = () => {

    return (
        <footer className='fter'>

            <Curves top={true} />
            <Container maxWidth="lg">
                <Grid container rowSpacing={3}>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <div className='fter__items'>
                            <div className='fter__itemsBox'>
                                <h4 className='fter__title'>Follow us</h4>
                                <ul className='fter__ul'>
                                    <li className='fter__item'>
                                        <a className='fter__link' href={xLink} target="_blank">x.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <div className='fter__items'>
                            <div className='fter__itemsBox'>
                                <h4 className='fter__title'>Join us</h4>
                                <ul className='fter__ul'>
                                    <li className='fter__item'>
                                        <a className='fter__link' href={telegramENLink} target="_blank">Telegram EN</a>
                                    </li>
                                    <li className='fter__item'>
                                        <a className='fter__link' href={telegramESLink} target="_blank">Telegram ES</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <div className='fter__items'>
                            <div className='fter__itemsBox'>
                                <h4 className='fter__title'>Charts</h4>
                                <ul className='fter__ul'>
                                    <li className='fter__item'>
                                        <a className='fter__link' href={dexScreenerLink} target="_blank">DEX Screener</a>
                                    </li>
                                    <li className='fter__item'>
                                        <a className='fter__link' href={birdeyeLink} target="_blank">Birdeye</a>
                                    </li>
                                    <li className='fter__item'>
                                        <a className='fter__link' href={geckoTerminalLink} target="_blank">Gecko Terminal</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <div className='fter__items'>
                            <div className='fter__itemsBox'>
                                <h6 className='fter__title'>Partners</h6>
                                <ul className='fter__ul'>
                                    <li className='fter__item'>
                                        <a className='fter__link' href={cmcLink} target="_blank">CoinMarketCap</a>
                                    </li>
                                    <li className='fter__item'>
                                        <a className='fter__link' href={coinGeckoLink} target="_blank">CoinGecko</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <p className='fter__copy'>© 2024 SMILEK. All rights reserved.</p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;
