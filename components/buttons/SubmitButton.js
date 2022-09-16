import btnStyles from '@/styles/SubmitButton.module.scss';

export default function SubmitButton({ customClassName, label }) {
  return (
    <button
      className={
        customClassName
          ? `${btnStyles.btn} ${btnStyles[customClassName]}`
          : btnStyles.btn
      }
      type='submit'
    >
      {label}
    </button>
  );
}
