import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <NavigationMenuItem>
    <NavigationMenuLink
      href={href}
      className={cn(
        navigationMenuTriggerStyle(),
        'bg-transparent hover:bg-white/10',
        className
      )}
    >
      {children}
    </NavigationMenuLink>
  </NavigationMenuItem>
);

export default NavLink;

