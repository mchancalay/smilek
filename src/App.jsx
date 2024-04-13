import React from 'react'
import Header from './components/Header/Header'
import { TokenDataProvider } from './context/TokenDataContext'
import AboutUs from './components/AboutUs/AboutUs'
import RoadMap from './components/RoadMap/RoadMap'
import Tokenomics from './components/Tokenomics/Tokenomics'
import Youtubers from './components/Youtubers/Youtubers'
import Video from './components/Video/Video'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <TokenDataProvider>
      <Header />
      <AboutUs />
      <Tokenomics/>
      <RoadMap  />
      <Youtubers />
      <Footer />
    </TokenDataProvider>
  )
}

export default App