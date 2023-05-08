import styles from './header.module.css';
import userIcon from '/src/assets/circle-user-solid.svg';
import { Link, NavLink } from 'react-router-dom';

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
          <NavLink
            to="login"
            className={styles.logIn}
          >
            <img src={userIcon} />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
