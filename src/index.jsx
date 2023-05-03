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
import { NotFound } from './pages/not-found';
import { RentDetails } from './pages/vans/rent-details';
import { VanDescription } from './components/host/van-description';
import { VanPhoto } from './components/host/van-photo';
import { VanPricing } from './components/host/van-pricing';
import { Vans } from './pages/vans';

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<RentDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<VanDescription />} />
              <Route path="pricing" element={<VanPricing />} />
              <Route path="photos" element={<VanPhoto/>} />
            </Route>
            <Route path="reviews" element={<HostReviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
