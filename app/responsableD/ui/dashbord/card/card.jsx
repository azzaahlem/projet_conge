
import { MdNumbers } from 'react-icons/md';
import styles from './card.module.css'
import { auth } from '/app/authh';
import {  countEmployees } from '/app/lib/Data';
const Card = async  () => {
  const {user} = await auth();
  const number =  await  countEmployees(user.job);
  return (
    <div className={styles.container}>
    <MdNumbers size={24}/>
    <div className={styles.texts}>
    <span className={styles.title} >العدد الكلي  للموظفين </span>
        <span className={styles.number}>{number}</span>
    </div>
</div>

  )
}

export default Card