import styles from './van-detail.module.css';
import { BackLink } from '/src/components/back-link';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { VanSummary } from '/src/components/host/van-summary';
import { getHostVan } from '/src/api/host';
import { requireAuth } from '/src/api/auth';

export async function loader({ request, params }) {
  await requireAuth(request);

  const van = await getHostVan(params.id);
  return { van };
}

export function HostVanDetail() {
  const { van } = useLoaderData();

  return (
    <div className={styles.content}>
      <BackLink to="/host/vans" label="Back to all vans" />
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
        <Outlet context={{ van }} />
      </div>
    </div>
  );
}
