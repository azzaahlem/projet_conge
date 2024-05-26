import style from '/app/M/ui/dashbord/vacances/vacances.module.css';
import { fetchMyEmployeeInVacance } from '/app/lib/Data';
import Search from '/app/M/ui/dashbord/search/search';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '/app/authh';

const Vacance = async({searchParams}) => {
  const {user} = await auth();
  const q=searchParams?.q || "";
  const myEmployees =  await fetchMyEmployeeInVacance(user.job,q);
 

  //  const q=searchParams?.q || "";
 
  
 
   return (
     <div className={style.container}>
      
      <div className={style.top}>
        <Search placeholder="بحث عن موظف..." />
     
      </div>
      
      { myEmployees.length === 0 ? (
          <div className={style.alertMessage}>
          <div>
            <Image
              src={"/image/search not found_.png"}
              width={200}
              height={200}
              alt="User Image"
            />
      

          </div>
          <h4 >لايوجد اي موظف في عطلة   !!</h4>
        </div>
        ) : ( 
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
               src={ employee.img||"/image/noavatar.jpg" } width="50" height="50" />
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
       </table>)}
     </div>
   );
};
export default Vacance;
