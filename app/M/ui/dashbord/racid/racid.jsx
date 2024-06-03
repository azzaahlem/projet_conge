import Image from 'next/image';
import styles from './racid.module.css';
import { MdSupervisedUserCircle } from 'react-icons/md';
import { auth } from '../../../../authh';
import { fetchUser } from '/app/lib/Data';
const Racid = async() => {
  const {user} = await auth();
  const users = await fetchUser(user.id); 
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>رصيدي</h2>

      <div className={styles.card}>
        <div className={styles.texts}>
          <span className={styles.title}>
          رصيدي من العطل خلال السنة 
          </span>
          <span className={styles.number}> {users.credit}</span>
          <span className={styles.detail}>استعمل:</span>
          <span className={styles.detail}>بقي :</span>
        </div>
      </div>
      </div>
  );
};

export default Racid;
