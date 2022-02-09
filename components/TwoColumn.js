import styles from '../styles/TwoColumn.module.scss';
import buttonStyles from '../styles/Button.module.scss';
import Button from './Button';

export default function TwoColumn(props) {
  const { image, title, content, rowOrder } = props;
  return (
    <div className={styles.container}>
      <div className={styles.inner} style={{ flexDirection: rowOrder }}>
        <div className={styles.itemLeft}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{content}</p>
          <Button
            text="Learn More"
            link="/about-us"
            className={buttonStyles.btn}
          />
        </div>
        <div className={styles.itemRight}>
          <img src={image} alt="" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
