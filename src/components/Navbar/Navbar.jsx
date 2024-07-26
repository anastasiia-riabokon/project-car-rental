import CustomNavLink from "../CustomNavLink/CustomNavLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar space-x-2 min-[1024px]:text-white font-medium">
        <li className="navbar-start text-white">
          <CustomNavLink to="/">Home</CustomNavLink>
        </li>
        <li className="navbar-center max-[1023px]:hidden">
          <CustomNavLink to="/catalog">Catalog</CustomNavLink>
        </li>
        <li className="navbar-end max-[1023px]:hidden">
          <CustomNavLink to="/favorite">Favorite</CustomNavLink>
        </li>
        <l className="navbar-end min-[1024px]:hidden">
          <span className="dropdown dropdown-end">
            <span tabIndex={0} role="button" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </span>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="text-[#3470FF]">
                <CustomNavLink to="/catalog">Catalog</CustomNavLink>
              </li>
              <li className="text-[#3470FF]">
                <CustomNavLink to="/favorite">Favorite</CustomNavLink>
              </li>
            </ul>
          </span>
        </l>
      </ul>
    </nav>
  );
};
export default Navbar;
