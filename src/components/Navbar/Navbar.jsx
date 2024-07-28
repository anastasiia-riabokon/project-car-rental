import CustomNavLink from "../CustomNavLink/CustomNavLink";

const Navbar = () => {
  return (
    <nav className="navbar text-white font-medium">
      <span className="navbar-start">
        <CustomNavLink to="/">
          <span className="flex gap-1 items-center">
            <img src="/car.png" alt="logotype" width={16} />
            Car Rental Ukraine
          </span>
        </CustomNavLink>
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
