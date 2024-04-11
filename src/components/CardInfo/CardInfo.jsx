import React from 'react'
import 'animate.css';

const CardInfo = ({ title, content, flex }) => {
    return (
        <div className='cI' style={{ flex: { flex } }}>
            <div className='cI__bg cI__bg--false'>
                <h4 className='cI__title'>{title}</h4>
                <p className='cI__value'>{content ? content : 'Loading...'}</p>
            </div>
        </div>
    )
}

export default CardInfo