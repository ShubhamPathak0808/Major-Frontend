import { createContext, useState } from 'react';

export const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
