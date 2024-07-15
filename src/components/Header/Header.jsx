import logo from "../../assets/images/logo.png"
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
    </header>
  );
};
