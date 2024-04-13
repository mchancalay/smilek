import React from 'react'
import { Container, Grid } from '@mui/material';
import CardInfo from '../CardInfo/CardInfo';
import TitleSection from '../TitleSection/TitleSection';
import { useTokenData } from '../../context/TokenDataContext';
import { supply } from '../../js/vars'
import Curves from '../Curves/Curves';

const Tokenomics = () => {

    const { fdv, priceUsd } = useTokenData();
    
    return (
        <div className='tokenomics' id="tokenomics" >
            <Curves top={true} />
            <Container maxWidth="lg">
                <div className='tokenomics__container'>
                    <TitleSection title={'Tokenomics'} firstSide={false} white={true}></TitleSection>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CardInfo title={'Supply'} content={supply} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <CardInfo title={'Price'} content={'$ ' + priceUsd} live={true} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <CardInfo title={'Marketcap'} content={fdv.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}  live={true} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <CardInfo title={'Buy & Sell tax'} content={'0%'} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <CardInfo title={'Liquidity Pool'} content={'100%'} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <CardInfo title={'Liquidity Burned'} content={'100%'} />
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Curves top={false} />
        </div>
    )
}

export default Tokenomics
