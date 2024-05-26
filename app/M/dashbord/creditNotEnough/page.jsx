
import styles from "./page.module.css";

import { MdOutlineCancel, MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { GiConfirmed } from "react-icons/gi";
const CreditPage = async ({params}) => {
  
 
  return (
    <div className={styles.container}>

      <div className={styles.content}>
      <div >
        <h3>رصيدك لا يسمح بطلب هده المدة </h3>
        <div className={styles.divbuttom}>
      
        <Link href="./Demand">
          <button className={styles.button}>
          <MdOutlineCancel /> حسنا
          </button>
        </Link>
       </div>
      </div>
      </div>
    </div>
  );
};

export default CreditPage;