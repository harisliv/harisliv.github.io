import React from 'react';
import { Document, Page, Text, View, Font } from '@react-pdf/renderer';
import type { EmploymentEntry } from '@/components/EmploymentTimeline/employmentData';
import { resumeData } from '@/shared/resumeData';
import { createStyles } from './ResumeStyles';

// Register Roboto Condensed font family with all weights and styles
Font.register({
  family: 'RobotoCondensed',
  fonts: [
    // Regular weights
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-Thin.ttf',
      fontWeight: 100,
      fontStyle: 'normal'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-ExtraLight.ttf',
      fontWeight: 200,
      fontStyle: 'normal'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-Light.ttf',
      fontWeight: 300,
      fontStyle: 'normal'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-Regular.ttf',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-Medium.ttf',
      fontWeight: 500,
      fontStyle: 'normal'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-SemiBold.ttf',
      fontWeight: 600,
      fontStyle: 'normal'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-Bold.ttf',
      fontWeight: 700,
      fontStyle: 'normal'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-ExtraBold.ttf',
      fontWeight: 800,
      fontStyle: 'normal'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-Black.ttf',
      fontWeight: 900,
      fontStyle: 'normal'
    },
    // Italic weights
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-ThinItalic.ttf',
      fontWeight: 100,
      fontStyle: 'italic'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-ExtraLightItalic.ttf',
      fontWeight: 200,
      fontStyle: 'italic'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-LightItalic.ttf',
      fontWeight: 300,
      fontStyle: 'italic'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-Italic.ttf',
      fontWeight: 400,
      fontStyle: 'italic'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-MediumItalic.ttf',
      fontWeight: 500,
      fontStyle: 'italic'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-SemiBoldItalic.ttf',
      fontWeight: 600,
      fontStyle: 'italic'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-BoldItalic.ttf',
      fontWeight: 700,
      fontStyle: 'italic'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-ExtraBoldItalic.ttf',
      fontWeight: 800,
      fontStyle: 'italic'
    },
    {
      src: '/Roboto_Condensed/static/RobotoCondensed-BlackItalic.ttf',
      fontWeight: 900,
      fontStyle: 'italic'
    }
  ]
});

// Helper function to format dates
const formatDate = (dateStr: string): string => {
  if (dateStr === 'Present') return 'Current';

  const [year, month] = dateStr.split('-');
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

// Create polished, compact styles with different fonts

interface ResumeDocumentProps {
  employmentHistory: EmploymentEntry[];
}

const ResumeDocument: React.FC<ResumeDocumentProps> = ({
  employmentHistory
}) => {
  // Group NTT DATA entries together
  const styles = createStyles();
  const groupedHistory: (
    | EmploymentEntry
    | { company: string; entries: EmploymentEntry[] }
  )[] = [];
  let currentGroup: EmploymentEntry[] | null = null;
  let currentCompany = '';

  employmentHistory.forEach((entry) => {
    if (entry.company === currentCompany && currentGroup) {
      currentGroup.push(entry);
    } else {
      if (currentGroup) {
        groupedHistory.push({ company: currentCompany, entries: currentGroup });
      }
      if (entry.company === 'NTT DATA Europe & Latam') {
        currentGroup = [entry];
        currentCompany = entry.company;
      } else {
        groupedHistory.push(entry);
        currentGroup = null;
        currentCompany = '';
      }
    }
  });

  if (currentGroup) {
    groupedHistory.push({ company: currentCompany, entries: currentGroup });
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.personalInfo.name}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>
              {resumeData.personalInfo.location}
            </Text>
            <Text style={styles.contactItem}>•</Text>
            <Text style={styles.contactItem}>
              {resumeData.personalInfo.phone}
            </Text>
            <Text style={styles.contactItem}>•</Text>
            <Text style={styles.contactItem}>
              {resumeData.personalInfo.email}
            </Text>
          </View>
        </View>

        {/* Professional Summary - Full Width */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{resumeData.professionalSummary}</Text>
        </View>

        {/* Technical Skills - Full Width */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsCategory}>
            <Text style={styles.skillsLabel}>Languages:</Text>
            <Text style={styles.skillsList}>
              {resumeData.technicalSkills.languages.join(', ')}
            </Text>
          </View>
          <View style={styles.skillsCategory}>
            <Text style={styles.skillsLabel}>Frameworks & Libraries:</Text>
            <Text style={styles.skillsList}>
              {resumeData.technicalSkills.frameworks.join(', ')}
            </Text>
          </View>
          <View style={styles.skillsCategory}>
            <Text style={styles.skillsLabel}>Tools & Infrastructure:</Text>
            <Text style={styles.skillsList}>
              {resumeData.technicalSkills.tools.join(', ')}
            </Text>
          </View>
        </View>

        {/* Employment History */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Employment History</Text>
          {groupedHistory.map((item, idx) => {
            if ('entries' in item) {
              // Grouped NTT DATA entries
              const firstEntry = item.entries[0];
              const lastEntry = item.entries[item.entries.length - 1];
              const startDate = formatDate(lastEntry.startDate);
              const endDate =
                firstEntry.endDate === 'Present'
                  ? 'Current'
                  : formatDate(firstEntry.endDate);

              return (
                <View key={`group-${idx}`} style={styles.employmentItem}>
                  <View style={styles.employmentHeader}>
                    <View style={styles.companyRow}>
                      <Text style={styles.company}>{item.company}</Text>
                      <Text style={styles.dateRange}>
                        {startDate} - {endDate}
                      </Text>
                    </View>
                    <Text style={styles.position}>{firstEntry.position}</Text>
                  </View>

                  {item.entries.map((entry) => (
                    <View key={entry.id}>
                      {entry.projectName && (
                        <View style={styles.projectHeader}>
                          <Text style={styles.projectName}>
                            Project ({formatDate(entry.startDate)} -{' '}
                            {entry.endDate === 'Present'
                              ? 'Current'
                              : formatDate(entry.endDate)}
                            ): {entry.projectName}
                          </Text>
                          {entry.projectDescription && (
                            <Text style={styles.projectDescription}>
                              {entry.projectDescription}
                            </Text>
                          )}
                        </View>
                      )}

                      {entry.details && entry.details.length > 0 && (
                        <View style={styles.detailsList}>
                          {entry.details.map((detail, detailIdx) => (
                            <Text key={detailIdx} style={styles.detailItem}>
                              • {detail}
                            </Text>
                          ))}
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              );
            } else {
              // Regular entry
              const entry = item as EmploymentEntry;
              return (
                <View key={entry.id} style={styles.employmentItem}>
                  <View style={styles.employmentHeader}>
                    <View style={styles.companyRow}>
                      <Text style={styles.company}>{entry.company}</Text>
                      <Text style={styles.dateRange}>
                        {formatDate(entry.startDate)} -{' '}
                        {entry.endDate === 'Present'
                          ? 'Current'
                          : formatDate(entry.endDate)}
                      </Text>
                    </View>
                    <Text style={styles.position}>{entry.position}</Text>
                  </View>

                  {entry.projectDescription && !entry.projectName && (
                    <Text style={styles.projectDescription}>
                      {entry.projectDescription}
                    </Text>
                  )}

                  {entry.details && entry.details.length > 0 && (
                    <View style={styles.detailsList}>
                      {entry.details.map((detail, detailIdx) => (
                        <Text key={detailIdx} style={styles.detailItem}>
                          • {detail}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              );
            }
          })}
        </View>

        {/* Education - At the Bottom */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Higher Education</Text>
          <View style={styles.educationContainer}>
            <Text style={styles.educationDegree}>
              {resumeData.education.degree}
            </Text>
            <Text style={styles.educationInstitution}>
              {resumeData.education.institution}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumeDocument;
