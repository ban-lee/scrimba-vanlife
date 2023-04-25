import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './pages/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { HostDashboard } from './pages/host/host-dashboard';
import { HostIncome } from './pages/host/host-income';
import { HostReviews } from './pages/host/host-reviews';
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

          <Route path="/host" element={<HostDashboard />} />
          <Route path="/host/income" element={<HostIncome />} />
          <Route path="/host/reviews" element={<HostReviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
