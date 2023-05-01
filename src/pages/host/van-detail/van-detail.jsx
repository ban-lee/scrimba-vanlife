import { BackLink } from '/src/components/back-link';
import { Link, useParams } from 'react-router-dom';
import styles from './van-detail.module.css';

export function HostVanDetail() {
  const params = useParams();

  return (
    <div className={styles.content}>
      <BackLink to="/host/vans" label="Back to all vans" />
      <h1>Van {params.id} Details</h1>
    </div>
  );
}
