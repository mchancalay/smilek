import React from 'react';
import Header from './components/Header/Header';
import { TokenDataProvider } from './context/TokenDataContext';
import AboutUs from './components/AboutUs/AboutUs';
import RoadMap from './components/RoadMap/RoadMap';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Youtubers from './components/Youtubers/Youtubers';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
import background from './assets/background.png';

const App = () => {
  return (
    <TokenDataProvider>
      <div className="background-container">
        <img className='hC__asd' src={background} alt="" />
      </div>
      <Header />
      <AboutUs />
      <Tokenomics />
      <RoadMap />
      <Youtubers />
      <Partners/>
      <Footer />
    </TokenDataProvider>
  );
};

export default App;
