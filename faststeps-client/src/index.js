import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import './components/css/about.css';
import './components/css/contact.css';
import './components/css/home.css';
import './components/css/join.css';
import './components/css/nav.css';
import './components/css/services.css';
import { LanguesProvider } from './hooks/LanguesContext';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider> 
     <Provider store={store}> 
       <LanguesProvider> 
        <App />
        </LanguesProvider>
     </Provider> 
     </HelmetProvider>  
    </BrowserRouter>
  </React.StrictMode>
);

 
reportWebVitals();
