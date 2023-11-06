import "./Footer.css";
import { Logo } from "../assets";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo" aria-label="easybank">
        <img src={Logo} alt="easybank" />
      </a>
      <ul className="SocialIcons">
        <li>
          <a href="#" aria-label="facebook">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaFacebookSquare />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="youtube">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaYoutubeSquare />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="twitter">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaTwitter />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="pinterest">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaPinterest />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="instagram">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaInstagram />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>

      <div className="FooterLinks">
        <ul className="FooterLinks-List">
          <li className="FooterLinks-List-Link">
            <a href="#">about us</a>
          </li>
          <li className="FooterLinks-List-Link">
            <a href="#">contact</a>
          </li>
          <li className="FooterLinks-List-Link">
            <a href="#">blog</a>
          </li>
        </ul>
        <ul className="FooterLinks-List">
          <li className="FooterLinks-List-Link">
            <a href="#">careers</a>
          </li>
          <li className="FooterLinks-List-Link">
            <a href="#">support</a>
          </li>
          <li className="FooterLinks-List-Link">
            <a href="#">privacy policy</a>
          </li>
        </ul>
      </div>

      <button className="FooterBtn">request invite</button>
      <p className="Copyright">&copy;Easybank. All Rights Reserved</p>
    </footer>
  );
}
export default Footer;
