import btnStyles from '@/styles/SubmitButton.module.scss';

export default function SubmitButton({ customClassName, label, disabled }) {
  return (
    <button
      className={
        customClassName
          ? `${btnStyles.btn} ${btnStyles[customClassName]}`
          : btnStyles.btn
      }
      type='submit'
      disabled={disabled}
    >
      {label}
    </button>
  );
}
