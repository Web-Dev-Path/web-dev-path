import styles from './Wrapper.module.scss';
import { combineClasses } from '@/utils/classnames';

export default function Wrapper({ customClass, children }) {
  const wrapperClass = combineClasses(styles.wrapper, customClass, styles);
  return <div className={wrapperClass}>{children}</div>;
}
