import styles from "./styles.scss"
export function LoginBox() {
  return (
    <div className={styles.loginBox}>
    <div className={styles.loginDiv}>
      <p className={styles.lbl}>Login</p>
      <div className={styles.exteEmail}>
        <div className={styles.email}>
          <img src="" />
          <div className={styles.inputLine}/>
          <input className={styles.inpEmail}>Email</input>
        </div>
      </div>
      <div className={styles.divPass}>
        <div className={styles.password}>
          <img src="" />
          <div className={styles.line}/>
          <input className={styles.inpPass}>Senha</input>
        </div>
        <img src="" />
      </div>
      <a className={styles.forget}>Esqueceu sua Senha?</a>
      <button className={styles.loginButton}>
        <p className={styles.text}>LOGIN</p>
      </button>
      <div className={styles.seperator}>
        <div className={styles.orLine}/>
        <p className={styles.orText}>OU</p>
        <div className={styles.orLine}/>
      </div>
      <p className={styles.socialText}>Entre com sua Rede Social:</p>
      <div className={styles.socialLogin}>
        <div className={styles.facebookbtn}>
          <div className={styles.content}>
            <p className={styles.loginText}>LINKED</p>
            <img src="" />
          </div>
        </div>
        <div className={styles.googlebtn}>
          <div className={styles.content}>
            <img src="" />
            <p className={styles.loginText}>GOOGLE</p>
          </div>
        </div>
      </div>
      <p className={styles.forgetText}>Não tem uma conta?
 Inscreva-se. </p>
 <div/>
    </div>
    </div>
  )
}