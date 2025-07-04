import styles from './SubmitButton.module.scss';

export function SubmitButton({ label, disabled }) {
  return (
    <button
      className={styles['submit-button']}
      type='submit'
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export function NewsLetterSubmitButton({ label, disabled }) {
  return (
    <button
      className={styles['news-letter-submit-button']}
      type='submit'
      disabled={disabled}
    >
      {label}
    </button>
  );
}
