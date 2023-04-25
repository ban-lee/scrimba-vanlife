import { Link } from 'react-router-dom';
import styles from './home.module.css';

export function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>You got the travel plans, we got the travel vans.</h1>
      <p className={styles.text}>
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road
        trip.
      </p>
      <div className={styles.vans}>
        <Link
          to="/vans"
          className={`button ${styles.vansButton}`}>
          Find your van
        </Link>
      </div>
    </div>
  );
}
