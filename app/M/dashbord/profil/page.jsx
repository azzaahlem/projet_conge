
import styles from '/app/M/ui/dashbord/profil/profil.module.css';
import { auth } from '/app/authh';
import Image from 'next/image';
import { updateUserpassword } from '/app/lib/actions';
import { fetchUser } from '/app/lib/Data';


const ProfilPage = async () => {
  
  
    
  const {user} = await auth();
  const users = await fetchUser(user.id); 
  
  return (
  <div className={styles.container}>
  <div className={styles.infoContainer}>
    <div className={styles.imgContainer}>
      <Image src={user.img || "/image/noavatar.jpg"} alt="" fill />
    </div>
    {user.functionn}
  </div>
  <div className={styles.formContainer}>
      <form  action={updateUserpassword}   className={styles.form}>
      <input type="hidden" name="id" value={user.id}/>
        <div className={styles.MP}>
          {' '}
          <label>الاسم:</label>
          <label className={styles.MR}>{user.username} </label>
        </div>
        <div className={styles.MP}>
          {' '}
          <label>اللقب:</label>
          <label className={styles.MR}> {user.user_familly_name} </label>
        </div>
           <div className={styles.MP}>
          <label>العنوان:</label>
          <label className={styles.MR}>{user.address}</label>
        </div>
          <div className={styles.MP}>
          <label>المنصب:</label>
          <label className={styles.MR}>{user.job}</label>
        </div>
        <div className={styles.MP}>
          {' '}
          <label>البريد الاكتروني:</label>
          <label className={styles.MR}>{user.email}</label>
        </div>

        <div className={styles.MP}>
          {' '}
          <label>رقم الهاتف:</label>
          <label className={styles.MR}> {user.phone}</label>
        </div>

    
        <div className={styles.MP}>
          {' '}
          <label htmlFor="">تعديل كلمة المرور :</label>
           

          <input type="password" name="password" className={styles.MR} required />
        </div>
        <button>تعديل</button>
     
      </form>
      
    </div>
</div>
);
};

export default ProfilPage;