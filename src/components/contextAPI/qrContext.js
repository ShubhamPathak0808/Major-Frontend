import { useState,createContext } from 'react';

export const qrContext = createContext();

export const QrProvider = ({ children }) => {
  const [qr, setqr] = useState('');

  return (
    <qrContext.Provider value={{ qr, setqr}}>
      {children}
    </qrContext.Provider>
  );
};