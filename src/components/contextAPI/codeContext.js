import { useState,createContext } from 'react';

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [coding, setCoding] = useState('');

  return (
    <CodeContext.Provider value={{ coding, setCoding}}>
      {children}
    </CodeContext.Provider>
  );
};