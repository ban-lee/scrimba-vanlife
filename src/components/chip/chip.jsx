import styles from './chip.module.css';

export const VAN_TYPES = {
  simple: {
    label: 'Simple',
  },
  luxury: {
    label: 'Luxury',
  },
  rugged: {
    label: 'Rugged',
  },
};

export function Chip(props) {
  return (
    <div
      className={`${styles.chip} ${styles[props.type]} ${props.isSelected ? styles.selected : ''}`}
    >
      {VAN_TYPES[props.type]?.label}
    </div>
  );
}
