import React from 'react';
import arrow from '../../assets/arrow.png';

const TitleSection = ({ title, side }) => {
  return (
    <div className='tS'>
      <div className='tS__top'>
        <img src={arrow} alt="" className='tS__img' />
        <h3 className='tS__title'>{title}</h3>
      </div>
      <h4 className='tS__subtitle'>Lorem ipsum dolor sit amet consectetur.</h4>
    </div>
  );
};

export default TitleSection;
