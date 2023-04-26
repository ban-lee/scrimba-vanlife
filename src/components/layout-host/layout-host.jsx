import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout-host.module.css';

export function HostLayout() {
  const activeStyles = {
    color: '#161616',
    textDecoration: 'underline',
  };

  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          to="/host"
          end
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>);
}
