import React from 'react'
import check from '../../assets/check.png';

const Check = ({ checked }) => {
    return (
        <div className='check' >
            {checked ? (
                <div className='check__bg check__bg--checked' >
                    <img className='check__check' src={check} alt="" />
                </div>
            ) : (
                <div className='check__bg' >

                </div>
            )}

        </div>
    )
}

export default Check