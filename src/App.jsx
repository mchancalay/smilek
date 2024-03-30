import React from 'react'
import Header from './components/Header/Header'
import { TokenDataProvider } from './context/TokenDataContext'
import AboutUs from './components/AboutUs/AboutUs'
import RoadMap from './components/RoadMap/RoadMap'

const App = () => {
  return (
    <div>
      <TokenDataProvider>
        <Header />
        <AboutUs/>
        <RoadMap />
      </TokenDataProvider>
    </div>
  )
}

export default App