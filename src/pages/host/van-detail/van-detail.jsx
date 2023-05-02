import styles from './van-detail.module.css';
import { BackLink } from '/src/components/back-link';
import { Chip } from '/src/components/chip';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}
