import styles from './rent-details.module.css';
import { BackLink } from '/src/components/back-link';
import { Chip, VAN_TYPES } from '/src/components/chip';
import { Link, useLoaderData, useLocation } from "react-router-dom"
import { getVan } from '/src/api/vans';
import { useEffect, useState } from 'react';

export async function loader({ params }) {
  const van = await getVan(params.id);
  return { van };
}

export function RentDetails() {
  const location = useLocation();
  const [backLink, setBackLink] = useState({label: 'Back to all vans', to: '..'});
  const { van } = useLoaderData();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.state?.search ?? {});
    if (!searchParams.has('type')) return;

    const type = searchParams.get('type');

    setBackLink({
      label: `Back to ${VAN_TYPES[type].label.toLowerCase()} vans`,
      to: `..?${searchParams.toString()}`,
    });
  }, []);

  return (
    <div className={styles.content}>
      <BackLink
        label={backLink.label}
        to={backLink.to}
      />
      <div className={styles.photo}>
        <img
          src={van.imageUrl}
          alt={`Photo of van ${van.name}`}
        />
      </div>
      <div className={styles.chips}>
        <Chip
          type={van.type}
          isSelected={true}
        />
      </div>
      <h2 className={`h2 ${styles.name}`}>{van.name}</h2>

      <div className={styles.cost}>
        <p>${van.price}</p>
        <p>/ day</p>
      </div>

      <p className={`text ${styles.description}`}>{van.description}</p>

      <div className={styles.rent}>
        <Link
          className={`button ${styles.rentButton}`}
        >
          Rent this van
        </Link>
      </div>
    </div>
  );
}
