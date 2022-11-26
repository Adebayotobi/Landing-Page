import { Link } from "react-router-dom";
import logo from "../images/shake.jpg";

export const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-logo">
        <a href="/">
          <img
            src={logo}
          />
        </a>
        <h1>Meet</h1>
      </div>
      <ul id="navlist">
        <Link className="link" to="/About">About Us</Link>
        <Link className="link" to="/Courses">Contact</Link>
        <Link className="link" to="/Resources">Career</Link>
        {/* <Link className="link" to="/OnlineLearning">Online Learning</Link> */}
      </ul>
      <button className="btn-me">Log in</button>
    </nav>
  );
};
