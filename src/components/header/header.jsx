import styles from './header.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logOut, useAuthState } from '/src/api/auth';

export function Header() {
  const isSignedIn = useAuthState();
  const navigate = useNavigate();

  async function handleLogOut() {
    await logOut();
    navigate('/');
  }

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
          {!isSignedIn && (
            <NavLink
              to="login"
            >
              <button className={`button ${styles.button}`}>Sign In</button>
            </NavLink>
          )}
          {isSignedIn && (
            <button
              className={`button ${styles.button}`}
              onClick={handleLogOut}
            >
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
