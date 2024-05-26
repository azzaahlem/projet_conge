
import { MdNumbers } from 'react-icons/md';
import styles from './card.module.css'


const Card = () => {
  return (
    <div className={styles.container}>
    <MdNumbers size={24}/>
    <div className={styles.texts}>
    <span className={styles.title}>العدد الكلي  للموظفين </span>
        <span className={styles.number}>35</span>
    </div>
</div>

  )
}

export default Card