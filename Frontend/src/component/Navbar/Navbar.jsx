import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, setSearch }) => {
  const [menu, setMenu] = useState("Home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken("");
    navigate('/');
  }

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
}


  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <div className="logo">Angel</div>
          <div className="logo-point"></div>
        </div>
      </Link>


      <div className={`nav-menu-mobile ${isMobileMenuOpen ? 'show' : ''}`}>
        <div className="close-icon" onClick={handleMenuToggle}>
          <img src={assets.cross_icon} alt="close" />
        </div>
        <Link
          to="/"
          onClick={() => {
            setMenu("Home");
            handleMenuToggle();
          }}
          className={menu === "Home" ? "active" : ""}
        > Home</Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
            handleMenuToggle();
          }}
          className={menu === "menu" ? "active" : ""}
        >menu </a>
        <a
          href="#AppDownload"
          onClick={() => {
            setMenu("mobile-app");
            handleMenuToggle();
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >mobile-app</a>
        <a
          href="#About"
          onClick={() => {
            setMenu("About");
            handleMenuToggle();
          }}
          className={menu === "About" ? "active" : ""}
        >About</a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact");
            handleMenuToggle();
          }}
          className={menu === "contact" ? "active" : ""}
        >contact</a>
      </div>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        > Home</Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >menu </a>
        <a
          href="#AppDownload"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >mobile-app</a>
        <a
          href="#About"
          onClick={() => setMenu("About")}
          className={menu === "About" ? "active" : ""}
        >About</a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >contact</a>
      </ul>


      <div className="navbar-right">

        {!token ?
          <button className="btn" onClick={() => setShowLogin(true)}>
            sign in </button>
          :
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
          <div className="menu-icon" onClick={handleMenuToggle}>
        <img src={assets.nav} alt="menu" />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
