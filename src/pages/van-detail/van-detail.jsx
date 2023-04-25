import { Chip } from '/src/components/chip';
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import arrowLeft from '/src/assets/arrow-left-solid.svg';
import styles from './van-detail.module.css';

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
          <Link
            to="/vans"
            className={styles.back}
          >
            <img src={arrowLeft} alt="Back to all vans" className={styles.backIcon} />
            <div>Back to all vans</div>
          </Link>
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
          <h1 className={styles.name}>{van.name}</h1>

          <div className={styles.cost}>
            <p>${van.price}</p>
            <p>/ day</p>
          </div>

          <p className={styles.description}>{van.description}</p>

          <div className={styles.rent}>
            <Link
              to="/vans"
              className={`button ${styles.rentButton}`}>
              Find your van
            </Link>
          </div>
        </>
      )}
    </div>
  );
}