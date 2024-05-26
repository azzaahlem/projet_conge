'use client';
              

import { authenticate } from '/app/lib/actions';
import React from 'react';

export default function LoginForm() {
//   const router = useRouter();
//   const [psw, setPsw] = useState('');
//   const p = (e) => {
//     // e.preventDefault();
//     if (psw === '2') {
//       router.push('/responsableD/dashbord');
//     } else {
//       if (psw === '3') {
//         router.push('/e/dashbord');
//       }
//     }

//     if (psw === '1') {
//       router.push('/M/dashbord');
//     }else{
//       if (psw === '4') {
//         router.push('/A/dashbord');
//       }
//     }
//   };
  return (
    <div className="grid place-items-center h-screen" >
      <div className="box">
        <span className="bg-animate"></span>

        <div className="form-box login">
          <h1>تسجيل الدخول</h1>
          <form action={authenticate} >
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
        <div class="info-text login">
          <h1>منصة </h1>
          <h1>طلبات العطل </h1>
          <h1>التعويضية</h1>
        </div>
      </div>
    </div>
  );
}
