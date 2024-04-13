import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '@mui/material';
import TitleSection from '../TitleSection/TitleSection';
import Youtuber from '../Youtuber/Youtuber';
import youtubersData from '../../data/yotubers.json';
import Curves from '../Curves/Curves';

const Youtubers = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
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
      <Curves top={true} />
      <Container maxWidth="lg">
        <TitleSection title={'Trending'} firstSide={false}></TitleSection>
        <Slider {...settings} className='youtubers__slider'>
          {youtubersData.map((youtuber, index) => (
            <Youtuber key={index} {...youtuber} />
          ))}
        </Slider>
      </Container>
      <Curves top={false} />
    </div>
  );
};

export default Youtubers;
