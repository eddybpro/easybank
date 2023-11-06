import "./Header.css";
import { Mockups } from "../assets";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="HeaderWrapper">
        <div className="HeaderWrapper-ImgBox">
          <img src={Mockups} alt="" />
        </div>
        <div className="HeaderWrapper-TxtBox">
          <h1 className="HeaderWrapper-TxtBox-Title">
            Next generation digital banking
          </h1>
          <p className="HeaderWrapper-TxtBox-Para">
            {" "}
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="HeaderWrapper-TxtBox-Btn">Request Invite</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
