import { MdOutlinePlaylistRemove, MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card3.module.css'
import { auth } from '/app/authh';
import {  countEmployeesNotwork  } from '/app/lib/Data';
const Card3 = async () => {
 const {user} = await auth();
    const number = await countEmployeesNotwork(user.job);  
    return (
   
    <div className={styles.container}>
    <MdOutlinePlaylistRemove size={24}/>
    <div className={styles.texts}>
    <span className={styles.title}>عدد العمال في عطلة </span>
        <span className={styles.number}>{number}</span>
    </div>
</div>

  )
}

export default Card3