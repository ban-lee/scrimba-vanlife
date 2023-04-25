import { Link } from 'react-router-dom';
import styles from './header.module.css';

export function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/" className={styles.title}>#VanLife</Link>
        <Link to="/host" className={styles.link}>Host</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/vans" className={styles.link}>Vans</Link>
      </nav>
    </header>
  );
}
