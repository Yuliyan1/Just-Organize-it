import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <Link to="/" className="Link">
        <h2>Just Organize It</h2>
      </Link>
    </header>
  );
}

export default Header;
