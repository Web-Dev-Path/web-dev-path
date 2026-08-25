export default function CloseIcon(props) {
  const { className, fill = 'var(--color-black)' } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M2.343 2.343a1 1 0 0 1 1.414 0L12 10.586l8.243-8.243a1 1 0 1 1 1.414 1.414L13.414 12l8.243 8.243a1 1 0 0 1-1.414 1.414L12 13.414l-8.243 8.243a1 1 0 0 1-1.414-1.414L10.586 12 2.343 3.757a1 1 0 0 1 0-1.414Z'
        fill={fill}
      />
    </svg>
  );
}
