import React from 'react'
import Check from '../Check/Check'

const CardRoadMap = ({ title, image, items  }) => {
    return (
        <div className='cRM'>
            <div className='cRM__box'>
                <img className='cRM__img' src={image} alt="" />
                <ul className='cRM__items'>
                    <h4 className='cRM__title'>{title}</h4>
                    {items.map((item, index) => (
                        <li key={index} className='cRM__item'>
                            <Check checked={item.checked} />
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardRoadMap