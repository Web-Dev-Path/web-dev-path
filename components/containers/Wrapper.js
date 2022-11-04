import wrapperStyles from '@/styles/Wrapper.module.scss';

export default function Wrapper({ customClass, children }) {
  return (
    <div
      className={
        customClass
          ? `${wrapperStyles.wrapper} ${wrapperStyles[customClass]}`
          : wrapperStyles.wrapper
      }
    >
      {children}
    </div>
  );
}
