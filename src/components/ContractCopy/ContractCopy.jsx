import React, { useState } from 'react'
import copy from '../../assets/copy.png'
import { ca } from '../../js/vars';

const ContractCopy = () => {
    const [tooltipText, setTooltipText] = useState('Copy');

    const handleCopy = () => {
        navigator.clipboard.writeText(ca)
            .then(() => {
                setTooltipText('Copied!');
                setTimeout(() => {
                    setTooltipText('Copy');
                }, 4000);
            })
    };

    return (
        <div className='cC'>
            <div className="cC__tooltip" onClick={handleCopy} >
                <div className='cC__circle'>
                    <img className="cC__icon" src={copy} alt="" />
                </div>
                <p className="cC__tooltiptext">{tooltipText}</p>
            </div>
            <div className="cC__rectangle">
                <p className="cC__text">{ca}</p>
            </div>
        </div>
    )
}

export default ContractCopy