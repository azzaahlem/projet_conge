import Image from 'next/image';
import styles from './racid.module.css';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Racid = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>رصيدي</h2>

      <div className={styles.card}>
        <div className={styles.texts}>
          <span className={styles.title}>
          رصيدي من العطل خلال السنة 
          </span>
          <span className={styles.number}>40 jours</span>
          <span className={styles.detail}>استعمل:</span>
          <span className={styles.detail}>بقي :</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.texts}>
          <span className={styles.title}>رصيدي من الغياب </span>
          <span className={styles.number}>Non défini</span>
          <span className={styles.detail}>استعمل :</span>
          <span className={styles.detail}>بقي :</span>
        </div>
      </div>
    </div>
  );
};

export default Racid;
