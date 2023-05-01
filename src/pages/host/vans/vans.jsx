import styles from './vans.module.css';
import { useEffect, useState } from 'react';
import { VanSlate } from '/src/components/van-slate';

export function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((json) => {
        setVans(json.vans);
      });
  }, []);

  return (
    <div className={styles.content}>
      <h2 className={`h2 ${styles.title}`}>Your listed vans</h2>
      <div className={styles.vans}>
        {vans.map((van) => {
          return <VanSlate key={van.id} van={van} />
        })}
      </div>
    </div>
  );
}
