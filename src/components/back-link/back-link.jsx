import arrowLeft from '/src/assets/arrow-left-solid.svg';
import styles from './back-link.module.css';
import { Link } from 'react-router-dom';

export function BackLink(props) {
  return (
    <Link
      to={props.to}
      className={styles.back}
    >
      <img src={arrowLeft} alt={props.label} className={styles.backIcon} />
      <div>{props.label}</div>
    </Link>
  );
}
