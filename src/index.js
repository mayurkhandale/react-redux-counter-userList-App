import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
    </Provider>
  
 </BrowserRouter>

);
