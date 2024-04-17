import React from 'react'
import Header from './components/Header/Header'
import { TokenDataProvider } from './context/TokenDataContext'
import AboutUs from './components/AboutUs/AboutUs'
import RoadMap from './components/RoadMap/RoadMap'
import Tokenomics from './components/Tokenomics/Tokenomics'
import Youtubers from './components/Youtubers/Youtubers'
import Footer from './components/Footer/Footer'
import Partners from './components/Partners/Partners'

const App = () => {
  return (
    <TokenDataProvider>
      <Header />
      <AboutUs />
      <Tokenomics />
      <RoadMap />
      <Youtubers />
      <Partners/>
      <Footer />
    </TokenDataProvider>
  )
}

export default App

{
  /*
        <div id="dexscreener-embed" style={{ position: 'relative', width: '100%', paddingBottom: '125%' }}>
      <iframe src="https://dexscreener.com/solana/DwwE6q9rPHKEoooMjv99hVUvA4CPUZJhws4CqrrBD7XT?embed=1&theme=dark" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: '0' }}></iframe>
    </div>
  */
}