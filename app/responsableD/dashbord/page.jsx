import { fetchUser } from '/app/lib/Data';
import Card from '../ui/dashbord/card/card';
import Card2 from '../ui/dashbord/card2/card2';
import Card3 from '../ui/dashbord/card3/card3';

import Chart from '../ui/dashbord/chart/chart';
import style from '../ui/dashbord/dashbord.module.css';

import Transaction from './tran/page';

const dashbord = async () => {
  const user =await fetchUser();
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.cards}>
          <Card />
          <Card2 />
          <Card3 />
        </div>
        <div className={style.transaction}>
          <Transaction />
        </div>
        <Chart />
      </div>
    </div>
  );
};
export default dashbord;