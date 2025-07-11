import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './page/Home';
import Details from './page/Details';
import { Provider } from 'react-redux';
import { store } from './features/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
