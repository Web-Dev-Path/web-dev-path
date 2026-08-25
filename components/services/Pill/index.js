import styles from './Pill.module.scss';
import { combineClasses } from '@/utils/classnames';

export default function Pill({ label, variant = 'primary', onClick }) {
  const pillClass = combineClasses(styles.pill, variant, styles);

  return (
    <button type='button' className={pillClass} onClick={onClick}>
      {label}
    </button>
  );
}
