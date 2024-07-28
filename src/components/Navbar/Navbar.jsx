import CustomNavLink from "../CustomNavLink/CustomNavLink";

const Navbar = () => {
  return (
    <nav className="navbar text-white font-medium">
      <span className="navbar-start">
        <CustomNavLink to="/">Home</CustomNavLink>
      </span>
      <ul className="navbar-end space-x-2">
        <li>
          <CustomNavLink to="/catalog">Catalog</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/favorite">Favorite</CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
