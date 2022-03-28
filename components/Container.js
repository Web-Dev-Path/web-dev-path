import containerStyles from '../styles/Container.module.scss';

export default function Container({ className, children }) {
  return (
    <div
      className={`${containerStyles.container} ${className ? className : ''}`}
    >
      {children}
    </div>
  );
}
