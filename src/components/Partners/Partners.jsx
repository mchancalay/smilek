import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import { Container, Grid } from '@mui/material';
import coinmarketcap from '../../assets/coinmarketcap.png';
import coingecko from '../../assets/coingecko.png';
import mexc from '../../assets/mexc.png';
import tapbit from '../../assets/tapbit.png';
import biconomy from '../../assets/biconomy.png';
import Partner from '../Partner/Partner';
import { cmcLink, coinGeckoLink, mexcLink, gotbitLink, tapbitLink, biconomyLink } from '../../js/vars';


const Partners = () => {
  return (
    <div className='partners' id="partners">
      <Container maxWidth="lg">
        <TitleSection title={'Partners'} subtitle={'and new coming soon!'}></TitleSection>
        <div style={{ marginTop: 20 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
              <Partner img={coinmarketcap} title={'CoinMarketCap'} redirect={cmcLink} />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
              <Partner img={coingecko} title={'CoinGecko'} redirect={coinGeckoLink} />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
              <Partner img={mexc} title={'MEXC'} redirect={mexcLink} />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
              <Partner img={tapbit} title={'Tapbit'} redirect={tapbitLink} />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
              <Partner img={biconomy} title={'Biconomy'} redirect={biconomyLink} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Partners