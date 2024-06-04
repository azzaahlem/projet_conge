import Sidebar from '../ui/dashbord/sidebar/sidebar';
import styles from '../ui/dashbord/dashbord.module.css';
import Navbar from '../ui/dashbord/navbar/navbar';

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
