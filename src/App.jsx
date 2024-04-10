import React from 'react'
import Header from './components/Header/Header'
import { TokenDataProvider } from './context/TokenDataContext'
import AboutUs from './components/AboutUs/AboutUs'
import RoadMap from './components/RoadMap/RoadMap'
import Tokenomics from './components/Tokenomics/Tokenomics'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <TokenDataProvider>
      <Header />
      <AboutUs />
      <Tokenomics/>
      <RoadMap  />
      <Footer />
    </TokenDataProvider>
  )
}

export default App