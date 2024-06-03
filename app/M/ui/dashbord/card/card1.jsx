import { MdSupervisedUserCircle } from 'react-icons/md';
import style from './card.module.css';

const Card1 = () => {
  return (
    <div classeName={style.container}>
      <div className={style.p}>
        <MdSupervisedUserCircle size={24} />
        <div className={style.texts}>
          <span className={style.title}>
           عدد الموظفين في عطلة
          </span>
          <span className={style.number}>250</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Card1;
