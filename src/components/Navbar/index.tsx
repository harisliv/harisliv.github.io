import { useEffect, useState } from 'react';
import { ModeToggle } from '@/components/ThemeProvider/mode-toggle';
import Logo from './Logo';
import NavLinks, { type NavItem } from './NavLinks';
import { cn } from '@/lib/utils';

interface NavbarProps {
  logoName?: string;
  navItems?: NavItem[];
}

const Navbar = ({ logoName, navItems }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/40'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo name={logoName} />

        <div className="flex items-center gap-2">
          <NavLinks items={navItems} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
export { Logo, NavLinks, type NavItem };
