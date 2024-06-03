
import styles from '/app/M/ui/dashbord/ne/ne.module.css';
import { addUser } from '/app/lib/actions';
import { fetchServices } from '/app/lib/Data';



const NePage =async ({searchParams}) => {

 const q=searchParams?.q || "";

 const services = await fetchServices(q);

    return (

        <div className={styles.container} >
             <form action={addUser} className={styles.form} >
                <div className={styles.forminputdiv}>
                     <label htmlFor="fileInput">الاسم :</label>
                      <input type="text" name="username" required/>

                        <label htmlFor="fileInput">اللقب:</label>
                        <input type="text" name="user_familly_name" required/>
                        
                </div>
            
          
                       <label htmlFor="fileInput">العنوان:</label>
                        <input type="text" name="address"/>
        
                        <label htmlFor="fileInput">رقم الهاتف:</label>
                        <input type="number" name="phone"/>
        
                         <label htmlFor="fileInput">البريد الالكتروني:</label>
                          <input type="email" name="email" required/>
        
                 <div className={styles.forminputdiv}> 
                      <label htmlFor="fileInput">الرصيد:</label>
                      <input type="number" name="credit"/>
            
                     <label htmlFor="myInput">الرتبة :</label>
                     <select name='functionn'>
                          <option hidden></option>
                         <option>عميد </option>
                          <option>مسؤول مباشر</option>
                             <option>موظف</option>
                            <option>رئيس القسم</option>


                       </select>
                  </div>
      
      <div className={styles.forminputdiv}>
        <label htmlFor="myInput">المنصب:</label>
          <select name="job">
            <option hidden></option>
            {services.map((service) => ( <option>{service.service_name}</option>))}
            <option>موظف</option>
            </select>
            <label htmlFor="myInput">المسؤول عنه:</label>
          <select name="user_responsabe">
            <option hidden></option>
            {services.map((service) => ( <option>{service.service_name}</option>))}
           
               </select></div>

      
              <label htmlFor="fileInput" >الصورة:</label> 
               <input type="String" name='img' />
        
             <label htmlFor="fileInput">كلمة المرور</label>
            <input type="text"  name="password" required/>
               <button  
             style={{ width: '100%' }}>حفظ</button>
        </form>
      </div>
     
      
    );
  };
  
  export default NePage;
  