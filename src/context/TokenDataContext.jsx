import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiDexscreener } from '../js/vars'

const TokenDataContext = createContext();

const TokenDataProvider = ({ children }) => {

  const [tokenData, setTokenData] = useState({
    fdv: 0,
    priceUsd: 0,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(apiDexscreener);
      const data = await response.json();
      console.log(data)
      
      if (data && data.pairs && data.pairs.length > 0) {
        const token = data.pairs[0];
        setTokenData({
          fdv: token.fdv || 0,
          priceUsd: token.priceUsd || 0
        });
      } else {
        setTokenData({
          fdv: 0,
          priceUsd: 0
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setTokenData({
        fdv: 0,
        priceUsd: 0
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TokenDataContext.Provider value={tokenData}>
      {children}
    </TokenDataContext.Provider>
  );
};

const useTokenData = () => {
  return useContext(TokenDataContext);
};

export { TokenDataProvider, useTokenData };
