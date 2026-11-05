import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ onSignInClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`header ${isHomePage ? "header_home" : "header_saved"} ${
        menuOpen ? "header_menu-open" : ""
      }`}
    >
      <div className="header__container">
        <NavLink className="header__logo" to="/" onClick={closeMenu}>
          NewsExplorer
        </NavLink>

        <button
          className="header__menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="header-navigation"
          className={`header__navigation ${
            menuOpen ? "header__navigation_open" : ""
          }`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header__link ${isActive ? "header__link_active" : ""}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              `header__link ${isActive ? "header__link_active" : ""}`
            }
            onClick={closeMenu}
          >
            Saved articles
          </NavLink>

          <button
            className="header__signin"
            type="button"
            onClick={() => {
              closeMenu();
              onSignInClick();
            }}
          >
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
