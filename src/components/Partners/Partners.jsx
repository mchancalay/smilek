import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import { Container } from '@mui/material';
import coinmarketcap from '../../assets/coinmarketcap.png';
import coingecko from '../../assets/coingecko.png';
import Partner from '../Partner/Partner';
import { cmcLink, coinGeckoLink } from '../../js/vars';

const Partners = () => {
  return (
    <div className='partners' id="partners">
      <Container maxWidth="lg">
        <TitleSection title={'Partners'} subtitle={'and new coming soon!'}></TitleSection>
        <div className='partners__container'>
          <Partner img={coinmarketcap} title={'CoinMarketCap'} redirect={cmcLink} />
          <Partner img={coingecko} title={'CoinGecko'} redirect={coinGeckoLink} />
        </div>
      </Container>
    </div>
  )
}

export default Partners