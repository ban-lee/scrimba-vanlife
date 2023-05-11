import styles from './layout-host.module.css';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getHostReviews, getHostVans } from '/src/api/host';
import { requireAuth } from '/src/api/auth';

export async function loader({ request }) {
  await requireAuth(request);

  const promiseData = await Promise.all([
    getHostVans(),
    getHostReviews(),
  ]);

  return {
    vans: promiseData[0],
    reviews: promiseData[1],
  };
}

export function HostLayout() {
  const data = useLoaderData();

  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          to="."
          end
          className={({isActive}) => `link ${isActive ? 'active' : ''}`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({isActive}) => `link ${isActive ? 'active' : ''}`}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({isActive}) => `link ${isActive ? 'active' : ''}`}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({isActive}) => `link ${isActive ? 'active' : ''}`}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet context={data} />
    </>);
}
