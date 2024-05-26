import { fetchMyEmployee } from '/app/lib/Data';
import style from '/app/responsableD/ui/dashbord/employes/employes.module.css';
import Search from '/app/responsableD/ui/dashbord/search/search';
import Image from 'next/image';
import { auth } from '/app/authh';
import { fetchUsers } from '/app/lib/Data';


const Employe = async({searchParams}) => {
  const {user} = await auth();
   const q=searchParams?.q || "";

 const myEmployees =  await fetchMyEmployee(user.job,q);


 
 


  return (
    <div className={style.container}>
     
      <div className={style.top}>
        <Search placeholder="بحث عن موظف..." />
       
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>رقم</td>
            <td>الاسم واللقب</td>
            <td>رقم الهاتف</td>
            <td>العنوان</td>
            <td>البريد الإلكتروني</td>
            <td>المهنة</td>
          </tr>
        </thead>

        <tbody>
        {myEmployees.map((employee,i) => (
          <tr key={user.id} >
            <td>{i+1}</td>
            <td>
              <div className={style.user}>
              <Image  className={style.userImage} 
              src={ employee.img||"/image/noavatar.jpg" } width="50" height="50" alt='no_image'/>
              {employee.user_familly_name} {employee.username} 
              </div>
            </td>
            <td>{employee.phone}</td>
            <td>{employee.address}</td>
            <td>{employee.email}</td>
            <td>{employee.functionn}</td>
          </tr>

  
             ))} 
        </tbody>
      </table>
    </div>
  );
};
export default Employe;
