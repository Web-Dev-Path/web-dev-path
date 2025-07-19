import styles from './Container.module.scss';

export default function Container({ className, children, _styles }) {
  return (
    <div className={`${styles.container} ${className || ''}`} style={_styles}>
      {children}
    </div>
  );
}
