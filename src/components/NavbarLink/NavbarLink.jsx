import React from 'react'

const NavbarLink = ( { surce, name, link, english, spanish } ) => {

    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div className='nbLink nbLink__tooltip' onClick={handleClick}>
            { english && <div className='nbLink__minicircle'><p className='nbLink__text'>EN</p></div>}
            { spanish && <div className='nbLink__minicircle'><p className='nbLink__text'>ES</p></div>}
            <img className='nbLink__link' src={surce} alt="" />
            <span className='nbLink__tooltiptext'>{name}</span>
        </div>
    )
}

export default NavbarLink