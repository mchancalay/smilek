import React from 'react'
import { Container, Grid } from '@mui/material';
import CardInfo from '../CardInfo/CardInfo';
import Curves from '../Curves/Curves';
import TitleSection from '../TitleSection/TitleSection';
import { useTokenData } from '../../context/TokenDataContext';
import { supply } from '../../js/vars'
import { formatMarketCap } from '../../js/functions'

const Tokenomics = () => {

    const { fdv, priceUsd } = useTokenData();

    return (
        <div className='tokenomics'>
            <Container maxWidth="lg">
                <div className='tokenomics__container'>
                    <TitleSection title={'Tokenomics'} firstSide={false} white={true}></TitleSection>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CardInfo title={'Supply'} content={supply} />
                        </Grid>
                        <Grid item xs={6}>
                            <CardInfo title={'Price'} content={'$ ' + priceUsd} live={true} />
                        </Grid>
                        <Grid item xs={6}>
                            <CardInfo title={'Marketcap'} content={fdv.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}  live={true} />
                        </Grid>
                        <Grid item xs={4}>
                            <CardInfo title={'Buy & Sell tax'} content={'0%'} />
                        </Grid>
                        <Grid item xs={4}>
                            <CardInfo title={'Liquidity Pool'} content={'100%'} />
                        </Grid>
                        <Grid item xs={4}>
                            <CardInfo title={'Liquidity Burned'} content={'100%'} />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Tokenomics
