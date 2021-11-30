import styles from "./App.scss"
import {LoginBox} from "./Components/LoginBox"


export default function App(): JSX.Element {
  return (
    <main className={styles.mainAppp}>
      <LoginBox/>
    </main>
  )
}


