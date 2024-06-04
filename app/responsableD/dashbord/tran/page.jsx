import Image from 'next/image';
import style from '/app/responsableD/ui/dashbord/transaction/transaction.module.css';
//import { fetchMyEmployee, fetchUser } from '/app/lib/Data';
import { auth } from '/app/authh';
import { Demandes } from '/app/lib/Data';
import { StatusAcceptDemande, StatusRefuseDemande } from '/app/lib/actions';

const Transaction = async() => {
  const {user} = await auth();
  const demandes = await Demandes(user.job);

  return (
    <div classeName={style.container}>
      <div classeName={style.u}>
        <h2 className={style.title}>قائمة الطلبات:</h2>
        {demandes.length === 0 ? (
          <div className={style.alertMessage}>
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
        <table className={style.table}>
          <thead>
            <tr>
              <td>الرقم</td>
              <td>الاسم واللقب </td>
              <td>عدد الايام</td>
              <td>تاريخ الخروج</td>
              <td>تاريخ الدخول</td>
              <td>التبرير</td>
              <td>القرار</td>
            </tr>
          </thead>
          <tbody>
          {demandes.map((demande,i) => (
  
    <tr key={demande.id} >
      <td>{i+1}</td>
              <td>
                <div className={style.user}>
                  <Image
                    className={style.userImage}
                    src={demande.user_id.img || "/image/noavatar.jpg"}
                    width="40"
                    height="40"
                  /> 
              {demande.user_id.user_familly_name} {demande.user_id.username} 
                </div>
              </td>
              <td>
                <span className={`${style.status} ${style.pending}`}>
                  {demande. number_days}
                </span>
              </td>
              <td>{demande.date_start.toString().slice(4,16)}</td>
              <td>{demande.date_end.toString().slice(4,16)}</td>
              <td></td>
              <td>
              <div className={style.buttons}>
                <form action={StatusAcceptDemande}> 
                <input type="hidden" name="id" value={demande.id} />
                <input type="hidden" name="functionn" value={user.functionn} />
                <input type="hidden" name="status" value="مقبول" />
                <button className={style.x}>قبول</button>
                </form>
                <form action={StatusRefuseDemande}>
                   <input type="hidden" name="id" value={demande.id} />
                   <input type="hidden" name="functionn" value={user.functionn} />
                   <input type="hidden" name="status" value="مرفوض" />
                   <button className={style.y} type="submit">رفض</button>
                 </form>
                 
                </div>
              </td>
            </tr>
          
            ))} 
          </tbody>
        </table> )}
      </div>  
    </div>
  );
};
export default Transaction;
