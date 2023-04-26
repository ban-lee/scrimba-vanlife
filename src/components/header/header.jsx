import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.css';

export function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/" className={styles.title}>#VanLife</Link>

        <div className={styles.links}>
          <NavLink
            to="/host"
            className={({isActive}) => isActive ? styles.selected : ''}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive}) => isActive ? styles.selected : ''}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({isActive}) => isActive ? styles.selected : ''}
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
