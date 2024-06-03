'use client';

import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

import { IoLanguageSharp } from 'react-icons/io5';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
    
    <img
          className={styles.userImage}
          src="/image/جامعة غرداية كلية العلوم والتكنولوجيا (3).png"
          
        />
    </div>
  );
};

export default Navbar;
