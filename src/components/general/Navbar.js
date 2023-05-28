import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <span className="logo-text">TaskTracker</span>
        </Link>
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/register" className="register">
          Register
        </Link>
      </nav>
    </header>
  );
}
