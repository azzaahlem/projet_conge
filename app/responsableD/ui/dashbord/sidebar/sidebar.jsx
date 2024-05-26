import Link from 'next/link';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdOutlineWysiwyg,
  MdOutlineContentCopy,
  MdExpand,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsFillClipboardDataFill } from 'react-icons/bs';
import { auth, signOut } from '/app/authh';

const menuItems = [
  {
    title: '',
    list: [
      {
        title: 'الرئيسة',
        path: '/responsableD/dashbord',
        icon: <MdDashboard />,
      },
      {
        title: 'الموظفين',
        path: '/responsableD/dashbord/employe',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'موظفون في عطلة',
        path: '/responsableD/dashbord/vacance',
        icon: <MdExpand />,
      },

      {
        title: 'طلب جديد',
        path: '/responsableD/dashbord/Demand',
        icon: <MdOutlineWysiwyg />,
      },
      {
        title: 'حسابي',
        path: '/responsableD/dashbord/profil',
        icon: <CgProfile />,
      },
    ],
  },
  {
    title: 'بيانات',
    list: [
      {
        title: 'رصيدي',
        path: '/responsableD/dashbord/Racidy',
        icon: <BsFillClipboardDataFill />,
      },
      {
        title: 'طلباتي',
        path: '/responsableD/dashbord/mesDemand',
        icon: <MdOutlineContentCopy />,
      },
    ],
  },
  {
    title: 'الاستعمال',
    list: [
      {
        title: 'مساعدة',
        path: '/responsableD/dashbord/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = async () => {



  
  const {user} = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/image/noavatar.jpg"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username} {user.user_familly_name}</span>
          <span className={styles.usertitle}>{user.job}  </span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

    <form action= {async ()=>{
        "use server"
    await signOut();
    }
  
    }>
        <button className={styles.logout}>
         تسجيل الخروج
          <MdLogout />
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
