import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </header>
    </div>
  );
}
