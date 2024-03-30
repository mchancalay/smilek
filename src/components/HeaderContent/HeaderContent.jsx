import React from 'react'
import character from '../../assets/character.png'
import { Container } from '@mui/material'
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import redirect from '../../assets/redirect.png'
import { whitepaperLink } from '../../js/vars';
import ContractCopy from '../ContractCopy/ContractCopy'
import Bar from '../Bar/Bar'


const HeaderContent = () => {
    return (
        <div className='hC'>
            <Container maxWidth="lg">
                <div className='hC__container'>
                    <div className='hC__box-1'>
                        <div className='hC__box-subtitle'>
                            <h2 className='hC__subtitle'>IT'S NEVER BEEN EASIER TO SMILE TO THE BANKS!</h2>
                        </div>
                        <h1 className='hC__title'>$SMILEK</h1>
                        <div className='hC__btns'>
                            <ButtonDefault 
                                bg={true} 
                                text={'WHITEPAPER'} 
                                icon={redirect} 
                                redirect={whitepaperLink} 
                            />
                            <ButtonDefault 
                                bg={false} 
                                text={'EXPLORE MORE'} 
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