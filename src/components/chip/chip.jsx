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
    if (props.onClick) classes.push(styles['chip--clickable']);

    return classes.join(' ');
  }

  return (
    <div className={getClasses()} onClick={props.onClick}>
      {VAN_TYPES[props.type]?.label}
    </div>
  );
}
