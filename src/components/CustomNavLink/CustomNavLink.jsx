import clsx from "clsx";
import {NavLink} from "react-router-dom";

const CustomNavLink = ({to, children}) => {
  const buildLinkClass = ({isActive}) => {
    return clsx(
      "hover:text-[#0B44CD] hover:bg-white py-[4px] px-[12px] rounded-[8px]",
      isActive && "text-[#0B44CD] bg-white"
    );
  };

  return (
    <NavLink to={to} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
