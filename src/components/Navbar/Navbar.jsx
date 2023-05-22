import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to={"/"}>
          <h1 className={styles.containerLogo}>
            Tamoaki
            <img
              src="https://res.cloudinary.com/drsm1mg9b/image/upload/v1681788835/dony_xrixcu.png"
              alt="Este es el logo de la empresa"
              style={{ Display: "flex" }}
            />
          </h1>
        </Link>

        <ul style={{ Display: "flex" }} className={styles.containerLista}>
          <Link to="/category/Noticias">Noticias</Link>
          <Link to="/category/Foro">Foro</Link>
          <Link to="/category/Estadisticas">Estadisticas</Link>
          <Link to="/category/Contacto">Contacto</Link>
          <Link to="/category/Login">Login</Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};
