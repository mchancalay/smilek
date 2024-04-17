import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '@mui/material';
import TitleSection from '../TitleSection/TitleSection';
import Youtuber from '../Youtuber/Youtuber';
import youtubersData from '../../data/yotubers.json';
import gradient from '../../assets/gradient.png';
import waveBottom from '../../assets/waveBottom.png';
import waveTop from '../../assets/waveTop.png';

const Youtubers = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="youtubers">
      <img src={waveBottom} alt="" className='tokenomics__waveBottom' />
      <img src={waveTop} alt="" className='tokenomics__waveTop' />
      <img src={gradient} alt="" className='tokenomics__gradient' />
      <div className="youtubers__container">
        <Container maxWidth="lg">
          <TitleSection title={'Trending'} subtitle={'videos about $SMILEK ES'}></TitleSection>
          <Slider {...settings} className='youtubers__slider'>
            {youtubersData.map((youtuber, index) => (
              <Youtuber key={index} {...youtuber} />
            ))}
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default Youtubers;
