import starIcon from '/src/assets/star-solid.svg';
import styles from './reviews.module.css';
import { useOutletContext } from 'react-router-dom';
import { Review } from '/src/components/review';

export function HostReviews() {
  const { reviews } = useOutletContext();

  function reviewAverage() {
    return reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length;
  }

  return (
    <div className={styles.content}>
      <h2 className="h2">Your reviews</h2>
      <div className={styles.overall}>
        <h2 className={`h2 ${styles.scoreActual}`}>{reviewAverage()}</h2>
        <img src={starIcon} width={24} height={24} />
        <div className="text">overall rating</div>
      </div>
      <div>
        <h5 className="h5">Reviews ({reviews.length})</h5>
        <div className={styles.reviewList}>
          {reviews.map((review, index) => <Review key={index} review={review} />)}
        </div>
      </div>
    </div>
  );
}
