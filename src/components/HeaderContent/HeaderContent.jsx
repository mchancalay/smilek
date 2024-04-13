import React from 'react'
import character from '../../assets/header.png'
import head1 from '../../assets/head1.png'
import head2 from '../../assets/head2.png'
import head3 from '../../assets/head3.png'
import bg from '../../assets/bg.jpg'
import { Container } from '@mui/material'
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import redirectBlack from '../../assets/redirectBlack.png'
import redirectWhite from '../../assets/redirectWhite.png'
import { whitepaperLink, buyLink } from '../../js/vars';
import ContractCopy from '../ContractCopy/ContractCopy'
import Bar from '../Bar/Bar'
import ParticleBackground from '../ParticleBackground/ParticleBackground';
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

                </div>
            </Container>
            <Bar />
        </div>
    )
}

export default HeaderContent