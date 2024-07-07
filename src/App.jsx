
import styles from "./App.module.css";
import { MyRoutes } from "./routes/MyRoutes";

function App() {

  return (
    <>
      <header className={styles.header}>
        <div>
          <img src="" alt="Logo" />
        </div>
        <form action="">
          <input type="text" />
        </form>
      </header>
      <MyRoutes />
      
    </>
  )
}

export default App
