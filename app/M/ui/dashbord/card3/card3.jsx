import { MdOutlinePlaylistRemove, MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card3.module.css'

const Card3 = () => {
  return (
    <div className={styles.container}>
    <MdOutlinePlaylistRemove size={24}/>
    <div className={styles.texts}>
    <span className={styles.title}>عدد العمال في عطلة </span>
        <span className={styles.number}>5</span>
    </div>
</div>

  )
}

export default Card3