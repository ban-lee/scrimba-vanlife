import { Van } from '../../components/van';
import styles from './vans.module.css';
import { useEffect, useState } from 'react';

export function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((json) => {
        setVans(json.vans);
      });
  }, []);

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Explore our van options</h1>
      <div className={styles.vans}>
        {vans.map((van) => <Van key={van.id} van={van} />)}
      </div>
    </div>
  );
}
