import starIcon from '/src/assets/star-solid.svg';
import styles from './review.module.css';

export function Review({ review }) {
  function starsElement() {
    return Array.from({length: review.rating}, (_, index) => <img key={index} src={starIcon} width={20} height={20} />);
  }

  return (
    <div className={styles.content}>
      <div className={styles.stars}>{starsElement()}</div>
      <div className={styles.reviewer}>{review.reviewer}</div>
      <div>{review.review}</div>
    </div>
  );
}
