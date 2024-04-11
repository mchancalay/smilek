import React from 'react'
import character from '../../assets/character.png'
import bg from '../../assets/bg.png'
import { Container } from '@mui/material'
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import redirectBlack from '../../assets/redirectBlack.png'
import redirectWhite from '../../assets/redirectWhite.png'
import { whitepaperLink, buyLink } from '../../js/vars';
import ContractCopy from '../ContractCopy/ContractCopy'
import Bar from '../Bar/Bar'

const HeaderContent = () => {

    return (
        <div className='hC'>
            <Container maxWidth="lg">
                <div className='hC__container'>
                    <div className='hC__box-1'>
                        <div className='hC__principal'>
                            <h2 className='hC__subtitle'>IT'S NEVER BEEN EASIER TO SMILE TO THE BANKS!</h2>
                        </div>
                        <div className='hC__principal'>
                            <h1 className='hC__title'>$SMILEK</h1>
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
                        <img src={character} alt="" className='hC__img' />
                    </div>
                </div>
            </Container>
            <Bar />
        </div>
    )
}

export default HeaderContent