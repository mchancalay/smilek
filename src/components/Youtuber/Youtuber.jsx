import React from 'react';

const Youtuber = ({ title, username, date, portadaUrl, canal, video }) => {
    return (
        <div className='ytber first__bg'>
            <div className='second__bg'>
                <h4 className='ytber__title'>{title}</h4>
                <a href={video} target="_blank" rel="noopener noreferrer">
                    <img className='ytber__img' src={portadaUrl} alt="" />
                </a>
                <div className='ytber__info'>
                    <a href={canal} className='ytber__yt' target="_blank" rel="noopener noreferrer">{username}</a>
                    <p className='ytber__date'>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default Youtuber;
