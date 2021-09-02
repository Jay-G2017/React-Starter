import styles from './index.less';

function Flat() {
  return (
    <div className={styles.card}>
      <div className={styles.cardCategory}>150 EUR</div>
      <div className={styles.cardDescription}>
        <h2>Super 60m2 in trendy neighborhood!</h2>
      </div>
      <a className={styles.cardLink} href="#"></a>
    </div>
  );
}

export default Flat;
