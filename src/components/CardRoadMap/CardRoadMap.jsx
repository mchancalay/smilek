import React from 'react'
import Check from '../Check/Check'

const CardRoadMap = ({ title, image, items }) => {
    return (
        <div className='cRM first__bg'>
            <div className='cRM__box second__bg'>
                <ul className='cRM__items'>
                    <h4 className='cRM__title'>{title}</h4>
                    {items.map((item, index) => (
                        <div className='cRM__item'>
                            <div>
                                <Check checked={item.checked} />
                            </div>
                            <p key={index} className='cRM__text'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </ul>
                <img className='cRM__img' src={image} alt="" />
            </div>
        </div>
    )
}

export default CardRoadMap