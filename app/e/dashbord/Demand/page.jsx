import styles from '/app/e/ui/dashbord/demandes/demandes.module.css';
import { adddemande } from '/app/lib/actions';
import { auth } from '/app/authh';

const DemandPage =async () => {

  const {user} = await auth();
  return (
    <div className={styles.container}>
       <form action={adddemande} className={styles.form}>
        <h1>طلب عطلة او رخصة غياب</h1>
         <input type="hidden" name='user_id' value={user.id}  />
         <input type="hidden" name='status' value="قيد المراجعة"  />
        <label htmlFor="myInput">نوع الطلب :</label>
        <select name='requestt_type' required>
  <option value="" disabled selected hidden>*******************************************************************</option>
  <option>عطلة سنوية</option>
  <option>عطلة استثنائية</option>
  <option>عطلة مرضية</option>
  <option>عطلة تعويضية</option>
  <option>رخصة غياب</option>
  <option>رخصة خروج صباحية</option>
  <option>رخصة خروج مسائية</option>
</select>

          <div>
            <label htmlFor="fileInput" className={styles.DD} >
             تاريخ البداية:
            </label>
            <input type="Date" id="myInput" name='date_start' required />
          </div>
          
       
          <label htmlFor="fileInput">المدة المطلوبة :</label>
          <input type="number" name='number_days' required/>
          
          <input type="hidden" name='functionn' value={user.functionn} />
       
          <label htmlFor="fileInput">التبرير :</label>
          <input type="text" name=' justification' />
      
      
          <button style={{ width: '100%' }}>ارسال</button>

      </form>
    </div>
  );
};

export default DemandPage;
