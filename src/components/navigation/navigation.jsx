import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.title}>#VanLife</Link>
      <Link to="/about" className={styles.link}>About</Link>
    </nav>
  );
}
