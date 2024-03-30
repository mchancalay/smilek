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
                <img className="cC__icon" src={copy} alt=""/>
                <span className="cC__tooltiptext">{tooltipText}</span>
            </div>
            <div className="cC__rectangle">
                <p className="cC__text">{ca}</p>
            </div>
        </div>
    )
}

export default ContractCopy