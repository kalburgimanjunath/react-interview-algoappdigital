import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { BrowserRouter as Router } from 'react-router';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import store from './store/store';
import { Provider } from 'react-redux';
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
