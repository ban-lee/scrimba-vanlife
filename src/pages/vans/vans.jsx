import styles from './vans.module.css';
import { Chip, VAN_TYPES } from '/src/components/chip';
import { Van } from '/src/components/van';
import { getAllVans } from '/src/api/vans';
import { useLoaderData, useSearchParams } from 'react-router-dom';

export async function loader() {
  const vans = await getAllVans();
  return { vans };
}

export function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  const { vans } = useLoaderData();

  function handleClick(type) {
    setSearchParams((searchParams) => {
      if (type === null || searchParams.get('type') === type) {
        searchParams.delete('type');
      } else {
        searchParams.set('type', type);
      }

      return searchParams;
    });
  }

  return (
    <div className={styles.content}>
      <h1 className="h1">Explore our van options</h1>
      <div className={styles.filters}>
        {Object.keys(VAN_TYPES).map((type) => {
          return (
            <Chip
              key={type}
              type={type}
              isSelected={typeFilter === type}
              onClick={() => handleClick(type)}
            />
          );
        })}
        {!!typeFilter && (
          <button
            className={`link ${styles.clearBtn}`}
            onClick={() => handleClick(null)}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className={styles.vans}>
        {vans
          .filter((van) => !!typeFilter ? van.type === typeFilter : true)
          .map((van) => <Van key={van.id} van={van} />)}
      </div>
    </div>
  );
}
