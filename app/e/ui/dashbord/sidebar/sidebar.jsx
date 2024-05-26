import Link from 'next/link';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import Image from 'next/image';
import { MdDashboard, MdHelpCenter, MdLogout,MdOutlineWysiwyg, MdOutlineContentCopy,} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsFillClipboardDataFill } from 'react-icons/bs';
import { auth, signOut } from '/app/authh';

const menuItems = [
  {
    title: '',
    list: [
      {
        title: 'الرئيسة',
        path: '/e/dashbord',
        icon: <MdDashboard />,
      },

      {
        title: 'طلب جديد',
        path: '/e/dashbord/Demand',
        icon: <MdOutlineWysiwyg />,
      },
      {
        title: 'حسابي',
        path: '/e/dashbord/profil',
        icon: <CgProfile />,
      },
    ],
  },
  {
    title: 'بيانات',
    list: [
      {
        title: 'رصيدي',
        path: '/e/dashbord/Racidy',
        icon: <BsFillClipboardDataFill />,
      },
      {
        title: 'طلباتي',
        path: '/e/dashbord/mesDemand',
        icon: <MdOutlineContentCopy />,
      },
    ],
  },
  {
    title: 'الاستعمال',
    list: [
      {
        title: 'مساعدة',
        path: '/e/dashbord/help',
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
        {user.job}
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username} {user.user_familly_name}</span>
          <span className={styles.usertitle}> {user.job}  </span>
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
