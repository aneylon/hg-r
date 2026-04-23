import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navigation;
