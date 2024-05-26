
import Search from '/app/M/ui/dashbord/search/search';
import styles from '/app/M/ui/dashbord/mesDemand/users.module.css';
import Link from 'next/link';
import { MdFileDownload, MdOutlineDeleteOutline} from 'react-icons/md';
import { fetchDemande } from '/app/lib/Data';
import { deleteDemande } from '/app/lib/actions';
import { auth } from '/app/authh';
import Swal from 'sweetalert2';
import { Button, Counter } from './button';
import Image from 'next/image';

const Userspage = async() => {


  const {user} = await auth();
  const demandes = await fetchDemande(user.id);
  


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/M/dashbord/Demand">
          <button className={styles.addButton}>
            إضافة طلب جديد
          </button>
        </Link>
     
      </div>
      {demandes.length === 0 ? (
          <div className={styles.alertMessage}>
          <div>
            <Image
              src={"/image/search not found_.png"}
              width={200}
              height={200}
              alt="User Image"
            />
          </div>
          <h4 >لايوجد اي طلب مقدم !!</h4>
        </div>
        ) : (  
      <table className={styles.table}>
    
          <tr>
            <td>رقم الطلب</td>
            <td>تاريخ الطلب </td>
            <td>نوع الطلب</td>
            <td>المدة المطلوبة</td>
            <td>تاريخ الخروج</td>
            <td>تاريخ الدخول</td>
            <td>حالة الطلب</td>
          </tr>
       
        <tbody>
        {demandes.map((demande,i) => (
          <tr key={demande.id} >
            <td>{i+1}</td>
            <td>{demande.createdAt.toString().slice(4,16)}</td>
            <td>{demande.requestt_type}</td>
            <td> {demande.number_days}</td>
            <td>{demande.date_start.toString().slice(4,16)}</td>
            <td>{demande.date_end.toString().slice(4,16)}</td>
            <td>{demande.status}</td>
            <td>
              <div className={styles.buttons}>
              <Button/>
              <Link href={`/M/dashbord/delete/${demande.id}`}>
                  <input type="hidden" name='id' value={demande.id} />
                  <input type="hidden" name='functionn' value={user.functionn} />
                <button className={`${styles.button} ${styles.delete}`} disabled={demande.status == "مقبول"}>
                  <MdOutlineDeleteOutline /> حذف
                </button> 
                </Link> 


                {/* <Link href={`/M/dashbord/${user.id}`}>
                  <button className={`${style.button} ${style.modifier}`}>
                    تعديل
                  </button>
                </Link> */}
              </div>
            </td>
          </tr>
          ))}   
        </tbody>
        
     
      </table>)}
    
    </div>
  );
};

export default Userspage;
