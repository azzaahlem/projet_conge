

import { deleteUser } from '/app/lib/actions';
import styles from "./DeleteUser.module.css";

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
        <h3>هل انت متاكد من حذف هذا الموظف ؟</h3>
        <div className={styles.divbuttom}>
         <form action={deleteUser}>
                  <input type="hidden" name='id' value={id} />
                <button className={styles.button}>
                <GiConfirmed />تاكيد
                </button> 
            
        </form>
        <Link href="./../employe">
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