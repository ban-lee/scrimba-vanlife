import starIcon from '/src/assets/star-solid.svg';
import styles from './dashboard.module.css';
import { Link, useOutletContext } from 'react-router-dom';
import { VanSlat } from '/src/components/van-slat';

export function HostDashboard() {
  const { vans, reviews } = useOutletContext();

  function reviewAverage() {
    return reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length;
  }

  return (
    <>
      <div className={styles.welcome}>
        <h1 className="h1">Welcome!</h1>
      </div>
      <div className={styles.review}>
        <h4 className="h4">Review score</h4>
        <div className={styles.score}>
          <img src={starIcon} width={24} height={24} />
          <div className={`h5 ${styles.scoreActual}`}>{reviewAverage()}</div>
        </div>
          <Link to="reviews" className="link">Details</Link>
      </div>
      <div className={styles.vans}>
        <h4 className="h4">Your listed vans</h4>

        <div className={styles.vansList}>
          {vans.slice(0, 2).map((van) => {
            return <VanSlat key={van.id} van={van} />
          })}
          {vans.length > 2 && (
            <Link to="vans" className={`link ${styles.more}`}>+{vans.length - 2} more</Link>
          )}
        </div>
      </div>
    </>
  );
}
