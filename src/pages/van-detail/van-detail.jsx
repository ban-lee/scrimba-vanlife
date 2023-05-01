import styles from './van-detail.module.css';
import { BackLink } from '/src/components/back-link';
import { Chip } from '/src/components/chip';
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

export function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
      setVan(json.vans);
    });
  }, [params.id]);

  return (
    <div className={styles.content}>
      {!van && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
      {!!van && (
        <>
          <BackLink to="/vans" label="Back to all vans" />
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
              to="/vans"
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
