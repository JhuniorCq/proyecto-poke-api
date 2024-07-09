import styles from "./App.module.css";
import { MyRoutes } from "./routes/MyRoutes";

function App() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src="" alt="Logo" />
        </div>
      </header>
      <MyRoutes />
    </>
  );
}

export default App;
