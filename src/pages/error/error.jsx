import styles from './error.module.css';
import { Link, useRouteError } from 'react-router-dom';

export function Error() {
  const error = useRouteError();

  function format(error) {
    const lines = [];
    for (let key of Object.keys(error)) {
      lines.push(`${key}: ${error[key]}`);
    }

    return lines;
  }

  return (
    <div className={styles.content}>
      <h2 className="h2">
        Sorry, an error has occured.
      </h2>
      <div className={styles.code}>
        {format(error).map((l, index) => <code key={index}>{l}</code>)}
      </div>
      <Link to="/" className={`button ${styles.homeBtn}`}>
        Return to home
      </Link>
    </div>
  );
}
