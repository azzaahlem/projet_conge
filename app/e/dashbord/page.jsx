
import styles from '../ui/dashbord/dashbord.module.css';

const Dashbord = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.welcome_message}>
          <h1>مرحبًا بك في منصة طلبات العطل التعويضية ورخص الخروج!</h1>
          <h3 >نحن هنا لتسهيل إجراءاتك ومساعدتك في إدارة طلباتك بكل سهولة ويسر. نأمل أن تجد تجربتك معنا مريحة وفعّالة.</h3>
        </div>
      </div>
    </div>
  );
  
};

export default Dashbord;
