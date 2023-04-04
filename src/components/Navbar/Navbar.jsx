import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import imgLogo from "../../assets/dony.png";

export const Navbar = (color) => {
  return (
    <div className={styles.containerNavbar}>
      <h1 className={styles.containerLogo}>
        Tamoaki
        <img
          src={imgLogo}
          alt="Este es el logo de la empresa"
          style={{ Display: "flex" }}
        />
      </h1>

      <ul style={{ Display: "flex" }} className={styles.containerLista}>
        <li style={{ listStyle: "none" }}> todas zapatillas</li>
        <li style={{ listStyle: "none" }}>zapatillas converse</li>
        <li style={{ listStyle: "none" }}>contacto</li>
      </ul>

      <CartWidget />
    </div>
  );
};
