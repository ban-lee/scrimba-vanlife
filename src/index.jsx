import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './pages/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Vans } from './pages/vans';
import { Navigation } from './components/navigation';

import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
