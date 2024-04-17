import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import { TokenDataProvider } from './context/TokenDataContext'
import AboutUs from './components/AboutUs/AboutUs'
import RoadMap from './components/RoadMap/RoadMap'
import Tokenomics from './components/Tokenomics/Tokenomics'
import Youtubers from './components/Youtubers/Youtubers'
import Footer from './components/Footer/Footer'
import Partners from './components/Partners/Partners'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asincrónica de los componentes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Cambia el tiempo según sea necesario
  }, []);

  return (
    <TokenDataProvider>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <>
          <Header />
          <AboutUs />
          <Tokenomics />
          <RoadMap />
          <Youtubers />
          <Partners />
          <Footer />
        </>
      )}
    </TokenDataProvider>
  )
}

export default App
