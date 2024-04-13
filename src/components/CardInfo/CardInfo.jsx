import React from 'react'
import 'animate.css';

const CardInfo = ({ title, content }) => {
    return (
        <div className='cI first__bg'>
            <div className='cI__bg second__bg'>
                <h4 className='cI__title'>{title}</h4>
                <p className='cI__value'>{content ? content : 'Loading...'}</p>
            </div>
        </div>
    )
}

export default CardInfo