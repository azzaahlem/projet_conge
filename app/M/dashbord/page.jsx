
"use client"
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
      <div className={style.welcome_message}>
          <h1>مرحبًا بك في منصة طلبات العطل التعويضية ورخص الخروج!</h1>
          <h3 >نحن هنا لتسهيل إجراءاتك ومساعدتك في إدارة طلباتك بكل سهولة ويسر. نأمل أن تجد تجربتك معنا مريحة وفعّالة.</h3>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;