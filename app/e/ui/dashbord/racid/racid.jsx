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
    <h2 className={styles.title}>رصيدي السنوي المتبقي</h2>
    <div className={styles.card}>
  {users.credit === 1 ? (
    <span className={styles.number}>يوم</span>
  ) : users.credit === 2 ? (
    <span className={styles.number}>يومان</span>
  ) : users.credit >= 3 && users.credit <= 10 ? (
    <span className={styles.number}> {users.credit}ايام</span>
  ) : (
    <span className={styles.number}> {users.credit}يوما</span>
  )}
</div>
  </div>
  );
};

export default Racid;
