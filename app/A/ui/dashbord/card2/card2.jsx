import { MdOutlineGrading, MdSupervisedUserCircle } from 'react-icons/md'
import { auth } from '/app/authh';
import {  countEmployeeswork} from '/app/lib/Data';
import styles from './card2.module.css'

const Card2 = async() => {
  const {user} = await auth();
  const number =  await  countEmployeeswork(user.job);
  return (
    <div className={styles.container}>
    <MdOutlineGrading size={24}/>
    <div className={styles.texts}>
    <span className={styles.title}>عدد العمال العاملين</span>
        <span className={styles.number}>{number}</span>
    </div>
</div>

  )
}

export default Card2