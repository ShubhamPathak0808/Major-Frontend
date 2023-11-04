import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App3';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { DurationProvider } from './components/contextAPI/DurationContext';       //new added part
import { ActiveProvider } from './components/contextAPI/ActiveContext';           //new added part
import { QrProvider } from './components/contextAPI/qrContext';                   //new added part
import { ScannedProvider } from './components/contextAPI/ScannedContext';                        //new added part


ReactDOM.render(
  <React.StrictMode>
  <ActiveProvider>                              {/* new added part */}
  <DurationProvider>                            {/* new added part */}
  <QrProvider>                                  {/* new added part */}
  <ScannedProvider>                             {/* new added part */}
    <App />
  </ScannedProvider>                            {/* new added part */}
  </QrProvider>                                 {/* new added part */}
  </DurationProvider>                           {/* new added part */}
  </ActiveProvider>                             {/* new added part */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
