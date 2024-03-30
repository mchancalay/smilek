import React from 'react'

const NavbarLink = ( { surce, name, link } ) => {

    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div className='nbLink nbLink__tooltip' onClick={handleClick}>
            <img className='nbLink__link' src={surce} alt="" />
            <span className='nbLink__tooltiptext'>{name}</span>
        </div>
    )
}

export default NavbarLink