import styles from './layout-host.module.css';
import { NavLink, Outlet } from 'react-router-dom';

export function HostLayout() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          to="/host"
          end
          className={({isActive}) => `link ${isActive ? 'active' : ''}`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({isActive}) => `link ${isActive ? 'active' : ''}`}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({isActive}) => `link ${isActive ? 'active' : ''}`}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({isActive}) => `link ${isActive ? 'active' : ''}`}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>);
}
