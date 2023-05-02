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
  function getClasses() {
    const classes = [styles.chip, styles[props.type]];

    if (props.isSelected) classes.push(styles.selected);
    if (props.isSmall) classes.push(styles['chip--small']);

    return classes.join(' ');
  }

  return (
    <div className={getClasses()}>
      {VAN_TYPES[props.type]?.label}
    </div>
  );
}
