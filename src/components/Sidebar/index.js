import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/MeghaLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/Megha.ai/">
      <img src={LogoS} alt="Logo" />
    </Link>
    <nav>
      <NavLink activeClassName="active" exact to="/Megha.ai/">
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="login-link"
        to="/Megha.ai/login"
      >
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="contact-link"
        to="/Megha.ai/contact"
      >
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="products-link"
        to="/Megha.ai/products"
      >
        <FontAwesomeIcon icon={faStore}></FontAwesomeIcon>
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
