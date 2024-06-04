import style from '/app/A/ui/dashbord/employes/employes.module.css';
import Search from '/app/A/ui/dashbord/search/search';
import { auth } from '/app/authh';
import { fetchMyEmployee ,fetchEmployeD} from '/app/lib/Data';
import Image from 'next/image';


const Employe = async({searchParams}) => {
  const {user} = await auth();
   const q=searchParams?.q || "";

 const myEmployees =  await fetchMyEmployee(user.job,q);

 

  const users = await fetchEmployeD(q);


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
            <td>المنصب</td>
          </tr>
        </thead>
        <tbody>
          {user.functionn === "رئيس قسم" ? (
            myEmployees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>
                  <div className={style.user}>
                    <Image
                      className={style.userImage}
                      src={employee.img || "/image/noavatar.jpg"}
                      width="50"
                      height="50"
                    />
                    {employee.user_familly_name} {employee.username}
                  </div>
                </td>
                <td>{employee.phone}</td>
                <td>{employee.address}</td>
                <td>{employee.email}</td>
                <td>{employee.job}</td>
              </tr>
            ))
          ) : user.functionn === "عميد" ? (
            users.map((user, i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>
                  <div className={style.user}>
                    <Image
                      className={style.userImage}
                      src={user.img || "/image/noavatar.jpg"}
                      width="50"
                      height="50"
                    />
                    {user.familly_name} {user.username}
                  </div>
                </td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.job}</td>
              </tr>
            ))
          ) : null}
        </tbody>
      </table>
    </div>
  );
  
}
export default Employe;