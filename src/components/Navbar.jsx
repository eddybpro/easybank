import "./Navbar.css";
import { Logo, Close, Menu } from "../assets";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <a href="#" className="Logo" aria-label="easybank">
        <img src={Logo} alt="easybank" />
      </a>
      <div className="MenuBox">
        {isMenuOpen ? (
          <button
            aria-label="close"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Close} alt="" />
          </button>
        ) : (
          <button
            aria-label="menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Menu} alt="" />
          </button>
        )}
      </div>
      <ul className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            home
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            about
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            contact
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            blog
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            careers
          </a>
        </li>
      </ul>
      <button className="NavBtn desktop">request invite</button>
    </nav>
  );
}
export default Navbar;
