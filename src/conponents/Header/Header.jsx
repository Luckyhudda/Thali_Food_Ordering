import { NavLink } from "react-router-dom";
import thaliLogo from '../../images/logo.png'
import { useState } from "react";

const Header = () => {
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
      setIsToggle(!isToggle);
    };
    const closeNavbar = () => {
      setIsToggle(false);
    };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Thali <img src={thaliLogo} alt="" height={"40px"} />
          </NavLink>
          <button
            className={`navbar-toggler ${isToggle ? "collapsed" : ""}`}
            onClick={handleToggle}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isToggle ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isToggle ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/cart"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Cart
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;