import React from 'react';
import arrow from '../../assets/arrow.png';

const TitleSection = ({ title, firstSide, white }) => {

  const topClass = firstSide ? 'tS__top' : 'tS__top tS__top--reversed';

  return (
    <div className='tS'>
      <div className={topClass}>
        <img src={arrow} alt="" className={firstSide ? 'tS__img' : 'tS__img tS__img--mirrored'} />
        <h3 className='tS__title tS__title--white'>{title}</h3>
      </div>
      <h4 className='tS__subtitle'>Lorem ipsum dolor sit amet consectetur.</h4>
    </div>
  );
};

export default TitleSection;
