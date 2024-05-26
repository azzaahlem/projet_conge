
"use client"
import { authenticate } from "/app/lib/actions";
import styles from "./loginForm.module.css";
import { useState } from "react";
import { useFormState } from "react-dom";
const LoginForm = () =>{

    const [state, formAction] = useFormState(authenticate, undefined);



    return (
        <div className="grid place-items-center h-screen" >
        {state && state} 
        <div className="box">
          <span className="bg-animate"></span>
  
          <div className="form-box login">
            <h1>تسجيل الدخول</h1>
            <form action={formAction}>
                  <div className="input-box">
                    <input type="email" placeholder='البريد الإلكتروني' name="email" />
  
                    <i className="bx bxs-user"></i>
                  </div>
  
                  <div className="input-box">
                    <input type="password" placeholder='كلمة المرور' name="password" />
                    <i className="bx bxs-lock-alt"></i>
                  </div>
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
      </div>
    )
}
export default LoginForm;