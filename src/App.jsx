import styles from "./App.module.css";
import { TotalaPokemonProvider } from "./context/TotalPokemonContext/TotalPokemonProvider";
import { MyRoutes } from "./routes/MyRoutes";

function App() {
  return (
    <TotalaPokemonProvider>
      <header className={styles.header}>
        <div>
          <img src="" alt="Logo" />
        </div>
        <form action="">
          <input type="text" />
        </form>
      </header>
      <MyRoutes />
    </TotalaPokemonProvider>
  );
}

export default App;
