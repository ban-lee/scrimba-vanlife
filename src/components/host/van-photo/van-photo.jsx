import styles from './van-photo.module.css';
import { useOutletContext } from 'react-router-dom';

export function VanPhoto() {
  const { van } = useOutletContext();

  return (
    <div className={styles.content}>
      <img
        src={van.imageUrl}
        alt={`Photo of van ${van.name}`}
        className={styles.photo}
      />
    </div>
  );
}
