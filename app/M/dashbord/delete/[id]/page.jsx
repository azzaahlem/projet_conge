


import styles from "./Delete.module.css";
import { deleteDemande } from '/app/lib/actions';
import { auth } from '/app/authh';
import { MdOutlineCancel, MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { GiConfirmed } from "react-icons/gi";
const deletePage = async ({params}) => {
  
  const {id} = params;
  const {user} = await auth();
  return (
    <div className={styles.container}>

      <div className={styles.content}>
      <div >
        <h3>هل انت متاكد من حذف هذا الطلب ؟</h3>
        <div className={styles.divbuttom}>
         <form action={deleteDemande}>
                  <input type="hidden" name='id' value={id} />
                  <input type="hidden" name='functionn' value={user.functionn} />
                <button className={styles.button}>
                <GiConfirmed />تاكيد
                </button> 
            
        </form>
        <Link href="./../mesDemand">
          <button className={styles.button}>
          <MdOutlineCancel /> إلغاء
          </button>
        </Link>
       </div>
      </div>
      </div>
    </div>
  );
};

export default deletePage;