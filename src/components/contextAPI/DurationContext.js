import { useState,createContext } from 'react';

export const DurationContext = createContext();

export const DurationProvider = ({ children }) => {
  const [Duration, setDuration] = useState(0);

  return (
    <DurationContext.Provider value={{ Duration, setDuration}}>
      {children}
    </DurationContext.Provider>
  );
};
