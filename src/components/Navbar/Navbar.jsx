import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
    </header>
  );
};
export default Navbar;
