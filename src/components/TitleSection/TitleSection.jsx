import React from 'react';

const TitleSection = ({ title, subtitle }) => {

  return (
    <div className='tS'>
      <h3 className='tS__title'>{title}</h3>
      <h4 className='tS__subtitle'>{subtitle}</h4>
    </div>
  );
};

export default TitleSection;
