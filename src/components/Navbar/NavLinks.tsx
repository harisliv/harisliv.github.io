import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import NavLink from './NavLink';
import DownloadResumeButton from './DownloadResumeButton';

export interface NavItem {
  href: string;
  label: string;
}

interface NavLinksProps {
  items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#employment-timeline', label: 'Employment History' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

const NavLinks = ({ items = defaultNavItems }: NavLinksProps) => (
  <NavigationMenu>
    <NavigationMenuList>
      {items.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

export default NavLinks;
