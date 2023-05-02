import styles from './van-detail.module.css';
import { BackLink } from '/src/components/back-link';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { VanSummary } from '/src/components/host/van-summary';

export function HostVanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
      setVan(json.vans[0]);
    });
  }, [params.id]);

  return (
    <div className={styles.content}>
      <BackLink label="Back to all vans" />
      {!!van && (
        <div className={styles.card}>
          <VanSummary van={van} />
          <nav className={styles.links}>
            <NavLink
              to="."
              end
              className={({isActive}) => `link ${isActive ? 'active' : ''}`}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({isActive}) => `link ${isActive ? 'active' : ''}`}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({isActive}) => `link ${isActive ? 'active' : ''}`}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet />
        </div>
      )}
    </div>
  );
}
