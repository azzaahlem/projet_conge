import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdOutlineDeviceUnknown, MdOutlineMore, MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
  <div className={styles.item}>
    <div className={styles.text}>
      <span className={styles.notification}>Prochainement</span>
      <h3 className={styles.title}>
        Plus de fonctionnalités en cours de développement
      </h3>
      <span className={styles.subtitle}>,,,,,,,,,,</span>
      <p className={styles.desc}>
        Découvrez toutes les fonctionnalités du site ...........
      </p>
      <button className={styles.button}>
        
        Découvrir<MdOutlineDeviceUnknown />
      </button>
    </div>
  </div>
</div>

  );
};

export default Rightbar;