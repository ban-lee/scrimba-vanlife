import styles from './vans.module.css';
import { VanSlat } from '/src/components/van-slat';
import { useOutletContext } from 'react-router-dom';

export function HostVans() {
  const { vans } = useOutletContext();

  return (
    <div className={styles.content}>
      <h2 className={`h2 ${styles.title}`}>Your listed vans</h2>
      <div className={styles.vans}>
        {vans.map((van) => {
          return <VanSlat key={van.id} van={van} />
        })}
      </div>
    </div>
  );
}
