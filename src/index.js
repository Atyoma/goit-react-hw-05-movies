import React from 'react';
import App from './components/App';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import 'modern-normalize/modern-normalize.css';

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);
