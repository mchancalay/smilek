import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import { Container, Grid } from '@mui/material';
import CardRoadMap from '../CardRoadMap/CardRoadMap';
import firstStep from '../../assets/firstStep.png';
import secondStep from '../../assets/secondStep.png';
import thirdStep from '../../assets/thirdStep.png';
import forthStep from '../../assets/forthStep.png';
import fifthStep from '../../assets/fifthStep.png';
import sixStep from '../../assets/sixStep.png';
import sevenStep from '../../assets/sevenStep.png';
import bar from '../../assets/bar.png';
import { roadMapFirstStep, roadMapSecondStep, roadMapThirdStep, roadMapForthStep, roadMapFifthStep, roadMapSixStep, roadMapSevenStep } from '../../js/roadMap'

const RoadMap = () => {
    return (
        <div className='rM' id="roadMap">
            <Container maxWidth="lg">
                <div className='rM__container'>
                    <TitleSection title={'Road map'} subtitle={'the path of $SMILEK'}></TitleSection>
                    <div className='rM__desktop'>
                        <Grid container justifyContent='center' alignItems='center'>
                            <Grid item xs={12} md={5}>
                                <div className='rM__steps'>
                                    <CardRoadMap title={'First step'} image={firstStep} items={roadMapFirstStep} />
                                    <CardRoadMap title={'Third step'} image={thirdStep} items={roadMapThirdStep} />
                                    <CardRoadMap title={'Fifth step'} image={fifthStep} items={roadMapFifthStep} />
                                    <CardRoadMap title={'Seven step'} image={sevenStep} items={roadMapSevenStep} />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <div className='rM__bar'>
                                    <img className='rM__img' src={bar} alt="" />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <div className='rM__steps'>
                                    <CardRoadMap title={'Second step'} image={secondStep} items={roadMapSecondStep} />
                                    <CardRoadMap title={'Forth step'} image={forthStep} items={roadMapForthStep} />
                                    <CardRoadMap title={'Six step'} image={sixStep} items={roadMapSixStep} />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='rM__m'>
                        <div className='rM__m__steps'>
                            <div className='rM__m__box'>
                                <CardRoadMap title={'First step'} image={firstStep} items={roadMapFirstStep} />
                                <CardRoadMap title={'Second step'} image={secondStep} items={roadMapSecondStep} />
                                <CardRoadMap title={'Third step'} image={thirdStep} items={roadMapThirdStep} />
                                <CardRoadMap title={'Forth step'} image={forthStep} items={roadMapForthStep} />
                                <CardRoadMap title={'Fifth step'} image={fifthStep} items={roadMapFifthStep} />
                                <CardRoadMap title={'Six step'} image={sixStep} items={roadMapSixStep} />
                                <CardRoadMap title={'Seven step'} image={sevenStep} items={roadMapSevenStep} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default RoadMap