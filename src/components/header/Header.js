import "./Header.css";
import Hero from "../hero/Hero";
export default function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Logo />
        <Links />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="/images/logo.jpg" alt="logo" />
    </div>
  );
}
function Links() {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#projectSection">PROJECTS</a>
        </li>
        <li>
          <a href="#skillSection">SKILLS</a>
        </li>
        <li>
          <a href="#contactSection">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}
