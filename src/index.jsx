import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './pages/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { HostDashboard } from './pages/host/host-dashboard';
import { HostIncome } from './pages/host/host-income';
import { HostLayout } from './components/layout-host';
import { HostReviews } from './pages/host/host-reviews';
import { HostVans } from './pages/host/vans';
import { HostVanDetail } from './pages/host/van-detail';
import { Layout } from './components/layout';
import { Vans } from './pages/vans';
import { VanDetail } from './pages/van-detail';

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<>Detail</>} />
              <Route path="pricing" element={<>Pricing</>} />
              <Route path="photos" element={<>Photos</>} />
            </Route>
            <Route path="reviews" element={<HostReviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
