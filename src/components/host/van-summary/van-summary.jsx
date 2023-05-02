import styles from './van-summary.module.css';
import { Chip } from '/src/components/chip';

export function VanSummary({ van }) {
  return (
    <div className={styles.summary}>
      <img
        src={van.imageUrl}
        alt={`Photo of van ${van.name}`}
        className={styles.photo}
      />
      <div className={styles.stack}>
        <Chip
          type={van.type}
          isSelected={true}
          isSmall={true}
        />
        <h4 className={`h4 ${styles.name}`}>{van.name}</h4>
        <div className={styles.cost}>
          <p>${van.price}</p>
          <p>/ day</p>
        </div>
      </div>
    </div>
  );
}
