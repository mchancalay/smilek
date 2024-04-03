import React from 'react'
import buy from '../../assets/buy.png'
import redirectWhite from '../../assets/redirectWhite.png'
import { buyLink } from '../../js/vars';

const ButtonImage = () => {

    const handleClick = () => {
        window.open(buyLink, '_blank');
    };

    return (
        <div className='buttonImage' onClick={handleClick}>
            <div className='buttonImage__bg'>
                <img className='buttonImage__img' src={buy} alt="" />
                <div className='buttonImage__box'>
                    <p className='buttonImage__text'>BUY</p>
                    <img className='buttonImage__icon'src={redirectWhite} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ButtonImage