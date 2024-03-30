import React from 'react'

const CardInfo = ({title, value}) => {
    return (
        <div className='cI'>
            <h4 className='cI__title'>{title}</h4>
            <p className='cI__value'>$ {value}</p>
        </div>
    )
}

export default CardInfo