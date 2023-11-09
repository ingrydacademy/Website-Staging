import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from 'next/navigation'
import "./NavItem.css"

interface Link {
  name: string;
  url: string;
}
interface NavMenuItemProps {
  href?: string;
  label: string;
  dropdown?: boolean;
  links?: Link[]
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ href, label, dropdown, links }) => {

  const linkClasses = "text-sm lg:text-lg cursor-pointer link hover:text-primary";
  
  const dropLinks = "flex items-center gap-3 lg:gap-1  ";

  const pathname = usePathname()

  const linkList = links?.map((link, i) => {
    return <li><Link key={i} className={`text-white hover:text-primary hover:text-lg transition-all ${pathname === link.url ? 'active' : ''}`} href={link.url}>{link.name}</Link></li>

  })
 
  return (
    <section>
      {
        dropdown && (
          <li className={linkClasses}>
            <div className={dropLinks} >
              {label} {<ChevronDown  className="icon"/>}
            </div>
            <ul className={`sublink text-sm  p-3 flex flex-col gap-3`}>
            {linkList}
            </ul>
          </li>
        )
      }
      {
        !dropdown && (
          <Link className={`${linkClasses} ${pathname === href ? 'active' : ''} no-drop`} href={href || "#"}>
            <span>{label}</span>
          </Link>
        )
      }
    </section>
  );
};

export default NavMenuItem