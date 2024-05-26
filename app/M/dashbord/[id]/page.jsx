import { updateUser } from "/app/lib/actions";
import { fetchUser } from "@/lib/data";
import { fetchServices } from "@/lib/data";
import styles from "/app/M/ui/dashbord/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params,searchParams }) => {
  const q=searchParams?.q || "";

 const services = await fetchServices(q);
  const { id } = params;
  const users = await fetchUser(id);


 
  return (
    <div className={styles.container}>

      
      <div className={styles.infoContainer}>
     
        <div className={styles.imgContainer}>
    
          
          <Image
          className={styles.userImage}
         src={users.img || "/image/noavatar.jpg"} alt=""  />
        
        </div>
         {users.username} {users.user_familly_name}
        </div>
     
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={users.id}/>
          <label>الاسم</label>
          <input type="text" name="username" placeholder={users.username} />

          <label>اللقب</label>
          <input type="text" name="user_familly_name" placeholder={users.user_familly_name} />

          <label>البريد الالكتروني</label>
          <input type="email" name="email" placeholder={users.email} />

          <label>كلمة المرور</label>
          <input type="password" name="password" />

          <label>رقم الهاتف</label>
          <input type="text" name="phone" placeholder={users.phone} />

          <label>العنوان</label>
          <textarea type="text" name="address" placeholder={users.address} />

          
          <label>المنصب </label>
         
          <select name="job">
            <option hidden></option>
            {services.map((service) => ( <option key={service.id}>{service.service_name}</option>))}
            <option>موظف</option>
            </select>

          <label>المسؤول المباشر</label>
         
          <select name="user_responsabe">
            <option hidden></option>
            {services.map((service) => ( <option key={service.id}>{service.service_name}</option>))}
           
               </select>

          <label>الرصيد</label>
          <input type="number" name="credit" placeholder={users.credit} />

          <button>تعديل</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;