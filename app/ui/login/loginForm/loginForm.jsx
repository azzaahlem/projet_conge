
"use client"
import { authenticate } from "/app/lib/actions";
import styles from "./loginForm.module.css";
import { useState } from "react";
import { useFormState } from "react-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Swal from "sweetalert2";

const LoginForm = () =>{
  const handelWarningmClick = () => {
    Swal.fire({
      title: 'Warning!',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      // Handle confirmation result here
      if (result.isConfirmed) {
        // If confirmed, perform the action
        console.log('Action performed');
      } else {
        // If canceled, do nothing or show a message
        console.log('Action canceled');
      }
    });
  };
  
  const handelAlertClick=()=>{
    Swal.fire("helooooooooo")
 }
 const handelConfirmClick =()=>{
  Swal.fire({
    title: 'Are you sure?',
    text: 'Delete item',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    // Handle confirmation result here
    if (result.isConfirmed) {
     Swal.fire("Deleted",'your file has been deleted ','success')
    } else if(result.dismiss===Swal.DismissReason.cancel){
      Swal.fire('Cancelled','gdgdghh',"error");
    }
  });



}
    const [state, formAction] = useFormState(authenticate, undefined);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <div className="grid place-items-center h-screen" >
       
        <div className="box">
          <span className="bg-animate"></span>
  
          <div className="form-box login">
            <h1>تسجيل الدخول</h1>
            <form action={formAction}>
                  <div className="input-box">
                    <input type="email" placeholder='البريد الإلكتروني'   style={{ paddingLeft: '40px' }}  name="email" />
  
                    <i className="bx bxs-user"   style={{color: "white" ,         position: 'absolute',
            top: '50%',
            left: '10px',
            cursor: 'pointer',
            transform: 'translateY(-50%)',
          }}><MdOutlineAlternateEmail /></i>
                  </div>
                  <div className="input-box">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="كلمة المرور"
        style={{ paddingLeft: '40px' }} 
        name="password"
      />
         <span
          className="icon"
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            cursor: 'pointer',
            transform: 'translateY(-50%)',
          }}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <IoEyeOffOutline style={{ color: "white" }} />
          ) : (
            <IoEyeOutline style={{ color: "white" }} />
          )}
        </span>
    </div>
                   <p style={{ color: "blue" }}>{state && state}</p>
                  <button type="submit" className="btn">
                    دخول
                  </button>
              



                  <div className="logreg-link"></div>
  </form>
  
          </div>
          <div className="info-text login">
            <h1>منصة </h1>
            <h1>طلبات العطل </h1>
            <h1>التعويضية</h1>
          </div>
        </div>
        {/* <button onClick={handelAlertClick}>MESSAGE</button>
        <button onClick={handelConfirmClick}>confirm</button>
        <button onClick={handelWarningmClick}>warning</button> */}
      </div>
    )
}
export default LoginForm;