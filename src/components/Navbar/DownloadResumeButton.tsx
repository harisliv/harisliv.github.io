import { Download } from 'lucide-react';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const DownloadResumeButton = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        href="/resume.pdf"
        onClick={handleDownload}
        className={cn(
          navigationMenuTriggerStyle(),
          'bg-transparent hover:bg-white/10 cursor-pointer flex-row gap-2'
        )}
      >
        <Download className="h-4 w-4" />
        CV
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default DownloadResumeButton;
