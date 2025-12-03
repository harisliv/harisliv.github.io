import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import NavLink from './NavLink';

export interface NavItem {
  href: string;
  label: string;
}

interface NavLinksProps {
  items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
  { href: '/resume.pdf', label: 'Resume' }
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

