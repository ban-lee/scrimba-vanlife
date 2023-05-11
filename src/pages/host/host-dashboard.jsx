import styles from './host.module.css';
import { Link, useOutletContext } from 'react-router-dom';
import { VanSlat } from '/src/components/van-slat';

export function HostDashboard() {
  const { vans } = useOutletContext();

  return (
    <>
      <div className={styles.welcome}>
        <h1 className="h1">Welcome!</h1>
      </div>
      <div className={styles.vans}>
        <h4 className="h4">Your listed vans</h4>

        <div className={styles.vansList}>
          {vans.slice(0, 2).map((van) => {
            return <VanSlat key={van.id} van={van} />
          })}
          {vans.length > 2 && (
            <Link to="vans" className={`link ${styles.more}`}>+{vans.length - 2} more</Link>
          )}
        </div>
      </div>
    </>
  );
}
