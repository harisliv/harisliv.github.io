import { employmentHistory } from '@/components/EmploymentTimeline/employmentData';
import ResumeDocument from '@/components/ResumePDF/ResumeDocument';
import { pdf } from '@react-pdf/renderer';

/**
 * Generates and downloads a PDF resume based on employment data
 */
export const generateResumePDF = async (): Promise<void> => {
  try {
    // Create the PDF document using JSX
    const doc = <ResumeDocument employmentHistory={employmentHistory} />;

    // Generate the PDF blob using pdf().toBlob()
    const instance = pdf(doc);
    const blob = await instance.toBlob();

    // Verify blob was created
    if (!blob) {
      throw new Error('Failed to generate PDF blob');
    }

    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Haris_Livieratos_Resume.pdf';
    link.style.display = 'none';

    // Trigger download
    document.body.appendChild(link);

    // Use setTimeout to ensure the link is in the DOM before clicking
    setTimeout(() => {
      link.click();

      // Cleanup after a short delay
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
        URL.revokeObjectURL(url);
      }, 100);
    }, 0);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error generating PDF:', error);
    throw error;
  }
};
