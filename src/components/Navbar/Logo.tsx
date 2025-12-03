interface LogoProps {
  name?: string;
  href?: string;
}

const Logo = ({ name = 'Your Name', href = '/' }: LogoProps) => (
  <a href={href} className="flex items-center gap-2">
    <span className="text-xl font-bold text-foreground">{name}</span>
  </a>
);

export default Logo;

