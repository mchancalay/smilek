import React from 'react'

const Partner = ({ img, title, redirect }) => {

    const handleClick = () => {
        window.open(redirect, '_blank');
    };

    return (
        <div className='partner first__bg' onClick={redirect ? handleClick : null}>
            <div className='partner__img second__bg'>
                <img className='partner__logo' src={img} alt="" />
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default Partner