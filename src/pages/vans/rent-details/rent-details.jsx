import styles from './rent-details.module.css';
import { BackLink } from '/src/components/back-link';
import { Chip, VAN_TYPES } from '/src/components/chip';
import { Link, useLocation, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from 'react';

export function RentDetails() {
  const location = useLocation();
  const routeParams = useParams();
  const backLink = useRef({label: 'Back to all vans', to: '..'});
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${routeParams.id}`)
      .then((res) => res.json())
      .then((json) => {
        setVan(json.vans);
      });

    const searchParams = new URLSearchParams(location.state?.search ?? {});
    if (searchParams.has('type')) {
      const type = searchParams.get('type');

      backLink.current = {
        label: `Back to ${VAN_TYPES[type].label.toLowerCase()} vans`,
        to: `..?${searchParams.toString()}`
      };
    }
  }, [routeParams.id]);

  return (
    <div className={styles.content}>
      {!van && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
      {!!van && (
        <>
          <BackLink
            label={backLink.current.label}
            to={backLink.current.to}
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
        </>
      )}
    </div>
  );
}
