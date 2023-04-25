import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './pages/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Vans } from './pages/vans';
import { Header } from './components/header';

import "./server";
import { VanDetail } from './pages/van-detail/van-detail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
