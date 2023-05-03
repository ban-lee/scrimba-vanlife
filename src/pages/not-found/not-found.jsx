import { Link } from 'react-router-dom';
import styles from './not-found.module.css';

export function NotFound() {
  return (
    <div className={styles.content}>
      <h2 className="h2">
        Sorry, the page you were looking for was not found.
      </h2>
      <Link to="/" className={`button ${styles.homeBtn}`}>
        Return to home
      </Link>
    </div>
  );
}
