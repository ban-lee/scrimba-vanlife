import styles from './van-slat.module.css';
import { Link } from 'react-router-dom';

export function VanSlat({ van }) {
  return (
    <Link
      to={`/host/vans/${van.id}`}
      className={styles.van}
    >
      <img
        src={van.imageUrl}
        alt={`Photo of van ${van.name}`}
        className={styles.photo}
      />
      <div className={styles.info}>
        <h5 className="h5">{van.name}</h5>
        <div className={`text ${styles.cost}`}>
          ${van.price}/ day
        </div>
      </div>
    </Link>
  );
}
