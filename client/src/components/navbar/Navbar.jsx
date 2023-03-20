import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faCloud,
  faLocationDot,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">ALL YOU NEED</span>
          </Link>
          {user ? (
            <span className="user">{user.username}</span>
          ) : (
            <div className="navItems">
              <Link to="/login">
                <button className="navButton">Register</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="headernav">
        <div className="headerContainernav">
          <div className="headerListnav">
            <div className="headerListItemnav active">
              <FontAwesomeIcon icon={faBed} />
              <span>Hospedagens</span>
            </div>
            <div className="headerListItemnav">
              <FontAwesomeIcon icon={faPlane} />
              <span>Voos</span>
            </div>
            <div className="headerListItemnav">
              <FontAwesomeIcon icon={faCar} />
              <span>Aluguel de carros</span>
            </div>
            <div className="headerListItemnav">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Ache por perto</span>
            </div>
            <div className="headerListItemnav">
              <FontAwesomeIcon icon={faCloud} />
              <span>Clima</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
