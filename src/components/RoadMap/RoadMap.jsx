import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import Curves from '../Curves/Curves';
import { Container, Grid, Divider } from '@mui/material';
import CardRoadMap from '../CardRoadMap/CardRoadMap';
import firstStep from '../../assets/firstStep.png';
import secondStep from '../../assets/secondStep.png';
import thirdStep from '../../assets/thirdStep.png';
import forthStep from '../../assets/forthStep.png';
import fifthStep from '../../assets/fifthStep.png';
import bar from '../../assets/bar.png';
import { roadMapFirstStep, roadMapSecondStep, roadMapThirdStep, roadMapForthStep, roadMapFifthStep } from '../../js/roadMap'

const RoadMap = () => {
    return (
        <div className='rM'>
            <Curves top={true}/>
            <Container maxWidth="lg">
                <div className='rM__container'>
                    <TitleSection title={'Road map'} side={2}></TitleSection>
                    <Grid container justifyContent='center' alignItems='center'>
                        <Grid item xs={12} md={5}>
                            <Grid container>
                                <div className='rM__steps'>
                                    <CardRoadMap title={'FIRST STEP'} image={firstStep} items={roadMapFirstStep} />
                                    <CardRoadMap title={'THIRD STEP'} image={thirdStep} items={roadMapThirdStep} />
                                    <CardRoadMap title={'FIFTH STEP'} image={fifthStep} items={roadMapFifthStep} />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={1}>
                            <div className='rM__bar'>
                                <img className='rM__img' src={bar} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Grid container>
                                <div className='rM__steps'>
                                    <CardRoadMap title={'SECOND STEP'} image={secondStep} items={roadMapSecondStep} />
                                    <CardRoadMap title={'FORTH STEP'} image={forthStep} items={roadMapForthStep} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                </div>
            </Container>
        </div>
    )
}

export default RoadMap