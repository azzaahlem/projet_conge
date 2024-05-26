import { MdOutlineGrading, MdSupervisedUserCircle } from 'react-icons/md'

import styles from './card2.module.css'

const Card2 = () => {
  return (
    <div className={styles.container}>
    <MdOutlineGrading size={24}/>
    <div className={styles.texts}>
    <span className={styles.title}>عدد العمال العاملين</span>
        <span className={styles.number}>30</span>
    </div>
</div>

  )
}

export default Card2