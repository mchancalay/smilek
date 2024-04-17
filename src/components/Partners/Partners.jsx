import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import { Container } from '@mui/material';
import coinmarketcap from '../../assets/coinmarketcap.png';
import coingecko from '../../assets/coingecko.png';


const Partners = () => {
  return (
    <div className='partners' id="partners">
      <Container maxWidth="lg">
        <TitleSection title={'Partners'} subtitle={'Short description of the Partners'}></TitleSection>
        <div className='partners__container'>
          <div className='partners__partner first__bg'>
            <div className='partners__img second__bg'>
              <img className='partners__cmc' src={coinmarketcap} alt="" />
              <h5>CoinMarketCap</h5>
            </div>
          </div>
          <div className='partners__partner first__bg'>
            <div className='partners__img second__bg'>
              <img className='partners__cg' src={coingecko} alt="" />
              <h5>CoinGecko</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Partners