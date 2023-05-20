import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = (color) => {
  return (
    <div className={styles.containerNavbar}>
      <h1 className={styles.containerLogo}>
        Tamoaki
        <img
          src="https://res.cloudinary.com/drsm1mg9b/image/upload/v1681788835/dony_xrixcu.png"
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
