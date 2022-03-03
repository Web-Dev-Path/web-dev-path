export default function BlueStick(props) {
  const { className, fill = '#19AAD1' } = props;

  return (
    <svg
      width="172"
      height="412"
      viewBox="0 0 172 412"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M36.5812 412C56.8032 412 68.1638 402.875 74.2985 382.343L169.955 49.0476C171.318 44.4851 172 40.1506 172 34.9037C172 13.9158 157.231 0 134.964 0C115.424 0 103.836 9.80952 97.4742 31.4817L2.04491 364.549C0.908851 368.656 0 373.446 0 378.921C0 397.172 12.9511 412 36.5812 412Z"
        fill={fill}
      />
    </svg>
  );
}
