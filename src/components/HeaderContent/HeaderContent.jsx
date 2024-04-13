import React from 'react'
import character from '../../assets/header.png'
import head from '../../assets/head.png'
import bg from '../../assets/bg.jpg'
import { Container } from '@mui/material'
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import redirectBlack from '../../assets/redirectBlack.png'
import redirectWhite from '../../assets/redirectWhite.png'
import { whitepaperLink, buyLink } from '../../js/vars';
import ContractCopy from '../ContractCopy/ContractCopy'
import Bar from '../Bar/Bar'
import 'animate.css'

const HeaderContent = () => {

    return (
        <div className='hC'>
            <img className='hC__bg' src={bg} alt="" />
            <img className='hC__bg--mobile' src={bg} alt="" />
            <Container maxWidth="lg">
                <div className='hC__container'>
                    <div className='hC__box-1'>
                        <div className='hC__principal'>
                            <h2 className='hC__subtitle'>IT'S NEVER BEEN EASIER TO SMILE TO THE BANKS!</h2>
                        </div>
                        <div className='hC__principal'>
                            <h1 className='hC__title animate__animated animate__bounceIn'>$SMILEK</h1>
                        </div>
                        <div className='hC__btns'>
                            <ButtonDefault
                                bg={true}
                                text={'BUY NOW'}
                                icon={redirectWhite}
                                redirect={buyLink}
                            />
                            <ButtonDefault
                                bg={false}
                                text={'WHITEPAPER'}
                                icon={redirectBlack}
                                redirect={whitepaperLink}
                            />
                        </div>
                        <ContractCopy />
                    </div>
                    <div className='hC__box-2'>
                        <img src={character} alt="" className='hC__img animate__animated animate__slideInRight' />
                        <div className='hC__heads animate__animated animate__zoomIn'>
                            <img src={head} alt="" className='hC__head hC__head1' />
                            <img src={head} alt="" className='hC__head hC__head2' />
                            <img src={head} alt="" className='hC__head hC__head3' />
                        </div>
                    </div>
                </div>
            </Container>
            <Bar />
        </div>
    )
}

export default HeaderContent