
import { MdNumbers } from 'react-icons/md';
import styles from './card.module.css'


const Card = () => {
  return (
    <div className={styles.container}>
    <MdNumbers size={24}/>
    <div className={styles.texts}>
        <span className={styles.title}>عدد العطل المستفاد منها</span>
        <span className={styles.number}>2.00000</span>
        <span className={styles.detail}>في السنة</span>
    </div>
</div>

  )
}

export default Card