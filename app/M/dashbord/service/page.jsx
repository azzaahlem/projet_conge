
import { addService, updateService } from '../../../lib/actions';
import { fetchServices } from '/app/lib/Data';
//import { fetchService } from '/app/lib/Data';
import style from '/app/M/ui/dashbord/services/services.module.css';

const Service = async({searchParams}) => {

    const q=searchParams?.q || "";
  
    const services = await fetchServices(q);

    //const { id } = searchParams;
    //const service = await fetchService(id);
  
    return (
      <div className={style.container}>
         <form action={addService} className={style.form} >
       
        <div className={style.top}>
         
         
            <label>اضافة مسؤول جديد</label>
            <input type='text' name='service_name' required/>
            <button className={style.addButton} >إضافة</button>
        </div>
       
        </form>
        <table className={style.table}>
          <thead>
            <tr>
              <td>رقم</td>
              <td>المسؤول</td>
             
            </tr>
          </thead>
  
          <tbody>
          {services.map((service,i) => (
            <tr key={service.id} >
              <td>{i+1}</td>
              <td>{service.service_name}</td>
             <td>

                 
  
             
             <div className={style.container}>
      
      <div className={style.Container}>
        <form action={updateService} className={style.form}>
          

        
          <input type="text" name="service_name" placeholder={service.service_name} />
           
           <input type='hidden' name='id' value={service.id}/>
          <div className={style.buttons}>
             
             <button className={`${style.button} ${style.modifier}`}>
               تعديل
             </button>
         
          
         </div>


         
        </form>
      </div>
    </div>
             </td>
             
            </tr>
  
         
               ))} 
          </tbody>
        </table>
       
      </div>
    );
    };
    export default Service;