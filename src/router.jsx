import { About } from './pages/about';
import { Error } from './pages/error';
import { Home } from './pages/home';
import { HostDashboard } from './pages/host/host-dashboard';
import { HostIncome } from './pages/host/host-income';
import { HostLayout } from './components/layout-host';
import { HostReviews } from './pages/host/host-reviews';
import { HostVans, loader as hostVansLoader } from './pages/host/vans';
import { HostVanDetail, loader as hostVanLoader } from './pages/host/van-detail';
import { Layout } from './components/layout';
import { LogIn, loader as logInLoader } from './pages/login';
import { NotFound } from './pages/not-found';
import { RentDetails, loader as vanLoader } from './pages/vans/rent-details';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { VanDescription } from './components/host/van-description';
import { VanPhoto } from './components/host/van-photo';
import { VanPricing } from './components/host/van-pricing';
import { Vans, loader as vansLoader } from './pages/vans';
import { requireAuth } from './api/auth';

async function authenticationLoader() {
  return await requireAuth();
}

export const ROUTER = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route
      errorElement={<Error />}
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<LogIn />}
        loader={logInLoader}
      />

      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<RentDetails />}
        loader={vanLoader}
      />

      <Route
        path="host"
        element={<HostLayout />}
        loader={authenticationLoader}
      >
        <Route
          index
          element={<HostDashboard />}
          loader={authenticationLoader}
        />
        <Route
          path="income"
          element={<HostIncome />}
          loader={authenticationLoader}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
      />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanLoader}
      >
          <Route
            index
            element={<VanDescription />}
            loader={authenticationLoader}
          />
          <Route
            path="pricing"
            element={<VanPricing />}
            loader={authenticationLoader}
          />
          <Route
            path="photos"
            element={<VanPhoto/>}
            loader={authenticationLoader}
          />
        </Route>
        <Route
          path="reviews"
          element={<HostReviews />}
          loader={authenticationLoader}
        />
      </Route>
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
));
