"use client";
import styles from '/app/responsableD/ui/dashbord/mesDemand/users.module.css';
import { useState } from 'react';
import Swal from 'sweetalert2'; // Import Swal
import { adddemande } from '/app/lib/actions';
import { MdFileDownload } from 'react-icons/md';

export function Button() {
    const [count, setCount] = useState(0); // Define state for count

    const handleAlertClick = () => {
        Swal.fire({
         text:   'هذه الخاصية قيد التطوير',
         icon: 'warning',
        }
    );
    };

    return (
        <div>
          
                
                <button  onClick={handleAlertClick}  className={`${styles.button} ${styles.view}` }>
                   <MdFileDownload/>    تحميل   
                  </button>
           
        </div>
    );
}
