import styles from './layout-host.module.css';
import { NavLink, Outlet } from 'react-router-dom';

export function HostLayout() {
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
      <Outlet />
    </>);
}
