import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.scss';

// Layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';

// Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
