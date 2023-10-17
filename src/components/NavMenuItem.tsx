import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


interface NavMenuItemProps {
  href?: string;
  label: string;
  dropdown?: boolean;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ href, label, dropdown }) => {
  const linkClasses = "mb-5 lg:mb-0 text-lg leading-6 cursor-pointer";
  const dropLinks = "flex items-center gap-1";
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = ():void => {
    console.log("hello from here")
  };
  
  return (
    <li className={linkClasses}  >
      {dropdown ? (
        <span className={dropLinks} >
          {label} {<ChevronDown className={` ${isOpen ? "rotate-180" : "rotate-0"}`} onClick={handleDropdownToggle}/>}
        </span>
      ) : (
        <Link href={href || "#"}>
          <span>{label}</span>
        </Link>
      )}
    </li>
  );
};

export default NavMenuItem