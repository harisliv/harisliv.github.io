// SVG Icon Component Wrapper
const SvgIcon = ({
  src,
  className,
  style
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}) => <img src={src} alt="" className={className} style={style} />;

export default SvgIcon;
