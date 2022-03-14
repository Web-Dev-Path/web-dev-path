export default function Bracket(props) {
  const { className, fill = '#FFCC4C' } = props;

  return (
    <svg
      width="179"
      height="366"
      viewBox="0 0 179 366"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M124.414 81.1248C124.414 23.5658 96.8124 2.33325e-05 40.1669 1.83804e-05C33.9874 1.78402e-05 28.4258 0.625658 23.8941 1.66838C7.20943 5.63078 1.11774e-07 15.641 -9.27436e-07 27.5282C-2.03957e-06 40.2496 5.76754 47.7573 17.3026 50.8855C19.7745 51.7197 22.4522 52.1368 25.13 52.3453C46.5524 54.8479 54.5857 64.6496 54.5857 89.4667L54.5857 125.754C54.5857 155.993 75.5961 175.179 113.085 179.35L113.085 187.067C75.5961 191.238 54.5857 210.424 54.5857 240.663L54.5857 276.533C54.5857 301.559 46.5523 311.361 25.13 313.655C22.2462 314.072 19.5684 314.697 17.0966 315.115C5.56154 318.451 -2.70171e-05 325.959 -2.8111e-05 338.472C-2.90955e-05 349.733 6.38547 359.535 21.2163 363.706C26.3659 365.166 32.7514 366 40.1668 366C96.8124 366 124.414 342.434 124.414 285.084L124.414 258.598C124.414 234.824 133.066 222.728 155.724 218.349C170.967 215.429 179 205.21 179 183.313C179 163.501 171.173 150.779 155.724 148.068C132.654 143.689 124.414 131.593 124.414 107.819L124.414 81.1248Z"
        fill={fill}
      />
    </svg>
  );
}
