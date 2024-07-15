import { Header } from "./components/Header/Header";
import { MyRoutes } from "./routes/MyRoutes";
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.background}>
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
