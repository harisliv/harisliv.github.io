import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/ThemeProvider/mode-toggle';
import { cn } from '@/lib/utils';

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-foreground">Your Name</span>
      </a>

      {/* Navigation */}
      <div className="flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#about"
                className={cn(
                  navigationMenuTriggerStyle(),
                  'bg-transparent hover:bg-white/10'
                )}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#work"
                className={cn(
                  navigationMenuTriggerStyle(),
                  'bg-transparent hover:bg-white/10'
                )}
              >
                Work
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contact"
                className={cn(
                  navigationMenuTriggerStyle(),
                  'bg-transparent hover:bg-white/10'
                )}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/resume.pdf"
                className={cn(
                  navigationMenuTriggerStyle(),
                  'bg-transparent hover:bg-white/10'
                )}
              >
                Resume
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </div>
  </header>
);

export default Navbar;
