import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './pages/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Layout } from './components/layout';
import { Vans } from './pages/vans';
import { VanDetail } from './pages/van-detail';

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
