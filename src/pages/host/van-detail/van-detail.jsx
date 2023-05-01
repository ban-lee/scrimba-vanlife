import { Link, useParams } from 'react-router-dom';
import styles from './van-detail.module.css';

export function HostVanDetail() {
  const params = useParams();

  return (
    <div className={styles.content}>
      <Link to="/host/vans">Back to all vans</Link>
      <h1>Van {params.id} Details</h1>
    </div>
  );
}
