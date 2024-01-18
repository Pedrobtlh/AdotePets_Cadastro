import style from "./Navbar.module.css";
import img from "../imgs/icons2.png";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbarElementsMain}>
        <img src={img}></img>
        <h1>Adote Pets</h1>
      </div>
      <div className={style.navbarElements}>
        <li>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "#EAEDDF" }}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Pet's Cadastrados
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "#EAEDDF" }}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/cadastrar"
          >
            Cadastrar
          </NavLink>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
