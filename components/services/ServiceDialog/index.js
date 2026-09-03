import Dialog from '@/components/overlays/Dialog';
import CloseIcon from '@/components/icons/CloseIcon';
import { combineClasses } from '@/utils/classnames';
import styles from './ServiceDialog.module.scss';

export default function ServiceDialog({
  open,
  onClose,
  titleId,
  label,
  description,
  variant = 'primary',
}) {
  const panelClass = combineClasses(styles.panel, variant, styles);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      titleId={titleId}
      className={panelClass}
      contained
    >
      <div className={styles.header}>
        <span id={titleId} className={styles.echoPill}>
          {label}
        </span>
        <button
          type='button'
          className={styles.closeButton}
          onClick={onClose}
          aria-label='Close'
        >
          <CloseIcon className={styles.closeIcon} />
        </button>
      </div>
      <p className={styles.description}>{description}</p>
    </Dialog>
  );
}
