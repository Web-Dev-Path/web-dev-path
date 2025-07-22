import _styles from './Container.module.scss';

export default function Container({ className, children, styles }) {
  return (
    <div className={`${_styles.container} ${className || ''}`} style={styles}>
      {children}
    </div>
  );
}
