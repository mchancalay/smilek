import React, { useEffect } from 'react';

const ButtonDefault = ({ bg, text, icon, redirect }) => {

    const bgClass = bg ? 'bD__bg--true' : 'bD__bg--false';

    const handleClick = () => {
        window.open(redirect, '_blank');
    };

    return (
        <div className="bD" onClick={redirect ? handleClick : null}>
            <div className={`bD__bg ${bgClass}`}>
                <p className="bD__text">{text}</p>
                {icon && <img className='bD__icon' src={icon} alt="" />}
            </div>
        </div>
    );
};

export default ButtonDefault;
