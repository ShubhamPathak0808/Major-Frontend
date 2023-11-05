import { useState,createContext } from 'react';

export const ScannedContext = createContext();

export const ScannedProvider = ({ children }) => {
  const [scan, setScan] = useState(false);

  return (
    <ScannedContext.Provider value={{ scan, setScan}}>
      {children}
    </ScannedContext.Provider>
  );
};