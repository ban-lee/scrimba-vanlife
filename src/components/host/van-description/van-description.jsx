import styles from './van-description.module.css';
import { useOutletContext } from 'react-router-dom';
import { VAN_TYPES } from '/src/components/chip';

export function VanDescription() {
  const van = useOutletContext();

  return (
    <div className={`text ${styles.content}`}>
      <div><strong>Name:</strong> {van?.name}</div>
      <div><strong>Category:</strong> {VAN_TYPES[van?.type]?.label}</div>
      <div><strong>Description:</strong> {van?.description}</div>
    </div>
  );
}
