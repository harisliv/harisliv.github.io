import { ModeToggle } from '@/components/ThemeProvider/mode-toggle';
import Logo from './Logo';
import NavLinks, { type NavItem } from './NavLinks';

interface NavbarProps {
  logoName?: string;
  navItems?: NavItem[];
}

const Navbar = ({ logoName, navItems }: NavbarProps) => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
      <Logo name={logoName} />

      <div className="flex items-center gap-2">
        <NavLinks items={navItems} />
        <ModeToggle />
      </div>
    </div>
  </header>
);

export default Navbar;
export { Logo, NavLinks, type NavItem };

