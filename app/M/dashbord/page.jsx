"use client"

import Card from '../ui/dashbord/card/card';
import Card2 from '../ui/dashbord/card2/card2';
import Card3 from '../ui/dashbord/card3/card3';



import style from '../ui/dashbord/dashbord.module.css';
import { useState, useEffect } from 'react'


const Dashboard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.cards}>
          <Card />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;