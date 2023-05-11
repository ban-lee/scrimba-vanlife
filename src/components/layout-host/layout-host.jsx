import styles from './layout-host.module.css';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans } from '/src/api/vans';
import { requireAuth } from '/src/api/auth';

export async function loader({ request }) {
  await requireAuth(request);

  const vans = await getHostVans();
  return { vans };
}

export function HostLayout() {
  const { vans } = useLoaderData();

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
      <Outlet context={{ vans }} />
    </>);
}
