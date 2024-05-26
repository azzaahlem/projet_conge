import Link from 'next/link';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdHelpCenter,
  MdLogout,
  MdOutlineWysiwyg,
  MdOutlineContentCopy,
  MdExpand,
  MdPersonAddAlt,
  MdBeachAccess,
  MdWorkOff,
  MdSupervisorAccount,
  MdEventAvailable,
  MdPersonOff,
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
        path: '/M/dashbord',
        icon: <MdDashboard />,
      },

      {
        title: 'المناصب',
        path: '/M/dashbord/service',
        icon: <MdSupervisorAccount />,
      },
      {
        title: 'الموظفين',
        path: '/M/dashbord/employe',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'موظف جديد',
        path: '/M/dashbord/ne',
        icon: <MdPersonAddAlt />,
      },

     
      {
        title: 'موظفون في عطلة',
        path: '/M/dashbord/vacance',
        // icon: <MdEventAvailable />,
        icon: <MdPersonOff />,
      },

      {
        title: 'طلب جديد',
        path: '/M/dashbord/Demand',
        icon: <MdOutlineWysiwyg />,
      },
      {
        title: 'حسابي',
        path: '/M/dashbord/profil',
        icon: <CgProfile />,
      },
    ],
  },
  {
    title: 'بيانات',
    list: [
      {
        title: 'رصيدي',
        path: '/M/dashbord/Racidy',
        icon: <BsFillClipboardDataFill />,
      },
      {
        title: 'طلباتي',
        path: '/M/dashbord/mesDemand',
        icon: <MdOutlineContentCopy />,
      },
    ],
  },
  {
    title: 'الاستعمال',
    list: [
      {
        title: 'مساعدة',
        path: '/M/dashbord/help',
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
          <span className={styles.usertitle}>{user.functionn}</span>
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
