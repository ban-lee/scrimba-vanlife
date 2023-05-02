import styles from './van.module.css';
import { Chip } from '/src/components/chip';
import { Link } from 'react-router-dom';

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
        <h5 className="h5">{props.van.name}</h5>
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
