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
    <Link className="logo" to="/">
      <img src={LogoS} alt="Logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="login-link"
        to="/login"
      >
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="products-link"
        to="/products"
      >
        <FontAwesomeIcon icon={faStore}></FontAwesomeIcon>
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
