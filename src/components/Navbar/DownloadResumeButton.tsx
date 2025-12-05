import { useState } from 'react';
import { Download } from 'lucide-react';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { generateResumePDF } from '@/utils/generateResumePDF';

const DownloadResumeButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await generateResumePDF();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to generate PDF:', error);
      // You could add a toast notification here if you have one
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        onClick={(e) => {
          e.preventDefault();
          handleDownload();
        }}
        className={cn(
          navigationMenuTriggerStyle(),
          'bg-transparent hover:bg-white/10 cursor-pointer',
          isGenerating && 'opacity-50 cursor-wait'
        )}
      >
        <Download className="mr-2 h-4 w-4" />
        {isGenerating ? 'Generating...' : 'Download Resume'}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default DownloadResumeButton;
