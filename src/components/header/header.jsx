import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.css';

export function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/" className={styles.title}>#VanLife</Link>

        <div className={styles.links}>
          <NavLink
            to="host"
            className={({isActive}) => `link link--large ${isActive ? 'active' : ''}`}
          >
            Host
          </NavLink>
          <NavLink
            to="about"
            className={({isActive}) => `link link--large ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="vans"
            className={({isActive}) => `link link--large ${isActive ? 'active' : ''}`}
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
