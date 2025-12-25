interface ILogoProps {
  href?: string;
}

const Logo = ({ href = '/' }: ILogoProps) => (
  <a href={href} className="flex items-center">
    <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
  </a>
);

export default Logo;
