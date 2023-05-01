import styles from './van-slate.module.css';
import { Link } from 'react-router-dom';

export function VanSlate(props) {
  return (
    <Link
      to={`/host/vans/${props.van.id}`}
      className={styles.van}
    >
      <img
        src={props.van.imageUrl}
        alt={`Photo of van ${props.van.name}`}
        className={styles.photo}
      />
      <div className={styles.info}>
        <h5 className="h5">{props.van.name}</h5>
        <div className={`text ${styles.cost}`}>
          ${props.van.price}/ day
        </div>
      </div>
    </Link>
  );
}
