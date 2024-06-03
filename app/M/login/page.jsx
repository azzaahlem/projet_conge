import styles from "@/app/ui/login/login.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
     <form action="" className={styles.form}>
    <h1>تسجيل الدخول</h1>
    <input type="text" placeholder="حساب الايميل" />
    <input type="password" placeholder="كلمة المرور" />
    <button>دخول</button>
</form>
</div>

  )
}

export default LoginPage