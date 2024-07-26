import clsx from "clsx";
import {NavLink} from "react-router-dom";

const CustomNavLink = ({to, children}) => {
  const buildLinkClass = ({isActive}) => {
    return clsx(
      "hover:text-[#0B44CD] min-[1024px]:hover:text-[#B3E5FC] max-[767px]:text-[18px] transition-color duration-[250ms]",
      isActive && "text-[#0B44CD] min-[1024px]:text-[#B3E5FC]"
    );
  };

  return (
    <NavLink to={to} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
