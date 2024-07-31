import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTheme from './components/muiTheme/MUITheme';
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, useLocation} from "react-router-dom"



const ScrollToTop =()=>{
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [pathname])

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
      <ScrollToTop />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

