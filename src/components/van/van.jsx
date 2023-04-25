import { Link } from 'react-router-dom';
import { Chip } from '../chip';
import styles from './van.module.css';

export function Van(props) {
  return (
    <Link
      to={`/vans/${props.van.id}`}
      className={styles.van}
    >
      <img
        src={props.van.imageUrl}
        alt={`Photo of van ${props.van.name}`}
        className={styles.photo}
      />
      <div className={styles.basicInfo}>
        <h3 className={styles.name}>{props.van.name}</h3>
        <div className={styles.cost}>
          <p>${props.van.price}</p>
          <p>/ day</p>
        </div>
      </div>
      <div className={styles.chips}>
        <Chip
          type={props.van.type}
          isSelected={true}
        />
      </div>
    </Link>
  );
}
