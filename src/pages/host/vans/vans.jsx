import styles from './vans.module.css';
import { VanSlat } from '/src/components/van-slat';
import { getHostVans } from '/src/api/host';
import { requireAuth } from '/src/api/auth';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  await requireAuth();

  const vans = await getHostVans();
  return { vans };
}

export function HostVans() {
  const { vans } = useLoaderData();

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
