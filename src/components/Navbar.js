import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <br />
      <Link to="/profile">My Profile</Link>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
