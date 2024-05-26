import { MdOutlinePlaylistRemove, MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card3.module.css'

const Card3 = () => {
  return (
    <div className={styles.container}>
    <MdOutlinePlaylistRemove size={24}/>
    <div className={styles.texts}>
        <span className={styles.title}>عدد العطل الباقية </span>
        <span className={styles.number}>2.00000</span>
        <span className={styles.detail}>خلال السنة</span>
    </div>
</div>

  )
}

export default Card3