import styles from './van-pricing.module.css';
import { useOutletContext } from 'react-router-dom';

export function VanPricing() {
  const van = useOutletContext();

  return (
    <div className={styles.content}>
      <span className="h4">${van.price}.00</span><span className="text">/ day</span>
    </div>
  );
}
