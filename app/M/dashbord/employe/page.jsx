
import { fetchUsers } from '/app/lib/Data';
import style from '/app/M/ui/dashbord/employes/employes.module.css';
import Search from '/app/M/ui/dashbord/search/search';
import { deleteUser } from '/app/lib/actions';
import Image from 'next/image';
import Link from 'next/link';



const Employe = async({searchParams}) => {

  const q=searchParams?.q || "";

  const users = await fetchUsers(q);

  return (
    <div className={style.container}>
     
      <div className={style.top}>
        <Search placeholder="بحث عن موظف..." />
        <Link href="/M/dashbord/ne">
          <button className={style.addButton}>إضافة</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead className={style.table}>
          <tr>
            <td>رقم</td>
            <td>الاسم واللقب</td>
            <td>رقم الهاتف</td>
            <td>العنوان</td>
            <td>البريد الإلكتروني</td>
            <td>المنصب</td>
            <td>المسؤول</td>
            <td>الرصيد</td>
            <td></td>
          </tr>
        </thead>

        <tbody>
        {users.map((user,i) => (
          <tr key={user.id} >
            <td>{i+1}</td>
            <td>
              <div className={style.user}>
              <Image
          className={style.userImage}
          src={ user.img||"/image/noavatar.jpg" }
          alt=""
          width="50"
          height="50"
        />
              {user.user_familly_name} {user.username} 
              </div>
            </td>
          
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>

          
            <td>{user.job}</td>
            <td>{user.user_responsabe}</td>
            <td>{user.credit}</td>
            <td>
            <div className={style.buttons}>
                <Link href={`/M/dashbord/${user.id}`}>
                  <button className={`${style.button} ${style.modifier}`}>
                    تعديل
                  </button>
                </Link>
                <Link href={`/M/dashbord/deleteUser/${user.id}`}>
                  <input type="hidden" name="id" value={user.id} />
                <button className={`${style.button} ${style.supprimer}`}>
                 حذف
                </button>  
                 </Link> 
              </div>
            </td>
          </tr>

       
             ))} 
        </tbody>
      </table>
    </div>
  );
};
export default Employe;
