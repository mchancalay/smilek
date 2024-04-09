import React from 'react'
import 'animate.css';

const Bar = () => {

    const renderParagraphs = (count) => {
        const paragraphs = [];
        for (let i = 0; i < count; i++) {
            paragraphs.push(<p className='bar__text' key={i}>$SMILEK</p>);
        }
        return paragraphs;
    };

    return (
        <div className='bar'>
            <div className='bar__first '>
                <div className='bar__bg bar__bg--false'>
                    {renderParagraphs(46)}
                </div>
            </div>
            <div className='bar__second'>
                <div className='bar__bg bar__bg--true'>
                    {renderParagraphs(46)}
                </div>
            </div>
        </div>
    )
}

export default Bar