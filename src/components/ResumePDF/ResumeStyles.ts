import { StyleSheet } from '@react-pdf/renderer';

// Font size constants
export const NORMAL_FONT_SIZE = 8.5;

export const createStyles = () =>
  StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 25,
      fontSize: 9
    },
    // Header with accent
    header: {
      marginBottom: 10,
      paddingBottom: 8,
      borderBottom: '2 solid #6366f1'
    },
    name: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: 4,
      letterSpacing: 0.5,
      fontFamily: 'Courier-Bold'
    },
    contactRow: {
      flexDirection: 'row',
      fontSize: NORMAL_FONT_SIZE,
      color: '#475569',
      gap: 8,
      justifyContent: 'center',
      fontFamily: 'RobotoCondensed'
    },
    contactItem: {
      color: '#475569',
      fontFamily: 'RobotoCondensed',
      textAlign: 'center'
    },
    // Sections
    section: {
      marginBottom: 7
    },
    sectionTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#6366f1',
      marginBottom: 4,
      textTransform: 'uppercase',
      letterSpacing: 1,
      borderBottom: '1 solid #e2e8f0',
      paddingBottom: 2,
      fontFamily: 'RobotoCondensed'
    },
    // Professional Summary
    summary: {
      fontSize: NORMAL_FONT_SIZE,
      color: '#334155',
      lineHeight: 1.4,
      textAlign: 'justify',
      fontFamily: 'RobotoCondensed'
    },
    // Technical Skills
    skillsCategory: {
      marginBottom: 3,
      width: '100%'
    },
    skillsLabel: {
      fontSize: NORMAL_FONT_SIZE,
      fontWeight: '600',
      color: '#475569',
      marginBottom: 1,
      fontFamily: 'RobotoCondensed'
    },
    skillsList: {
      fontSize: NORMAL_FONT_SIZE,
      color: '#334155',
      lineHeight: 1.3,
      fontFamily: 'RobotoCondensed'
    },
    // Education
    educationContainer: {
      marginBottom: 2
    },
    educationDegree: {
      fontSize: NORMAL_FONT_SIZE,
      color: '#334155',
      marginBottom: 1,
      fontFamily: 'RobotoCondensed'
    },
    educationInstitution: {
      fontSize: NORMAL_FONT_SIZE,
      color: '#475569',
      fontWeight: '600',
      fontFamily: 'RobotoCondensed'
    },
    // Employment
    employmentItem: {
      marginBottom: 6,
      paddingLeft: 4
    },
    employmentHeader: {
      marginBottom: 2
    },
    companyRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 1
    },
    company: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#1e293b',
      flex: 1,
      fontFamily: 'RobotoCondensed'
    },
    dateRange: {
      fontSize: NORMAL_FONT_SIZE,
      color: '#64748b',
      fontWeight: '600',
      fontFamily: 'RobotoCondensed'
    },
    position: {
      fontSize: 9,
      fontWeight: '600',
      color: '#475569',
      marginBottom: 1,
      fontFamily: 'RobotoCondensed'
    },
    projectHeader: {
      marginTop: 3,
      marginBottom: 2,
      paddingLeft: 4
    },
    projectName: {
      fontSize: NORMAL_FONT_SIZE,
      fontWeight: '600',
      color: '#6366f1',
      marginBottom: 1,
      fontFamily: 'RobotoCondensed'
    },
    projectDescription: {
      fontSize: NORMAL_FONT_SIZE,
      color: '#64748b',
      lineHeight: 1.3,
      marginBottom: 2,
      fontFamily: 'RobotoCondensed'
    },
    detailsList: {
      marginTop: 2
    },
    detailItem: {
      flexDirection: 'row',
      marginBottom: 1.2,
      paddingLeft: 6
    },
    bulletPoint: {
      fontSize: 12,
      color: '#334155',
      width: 12,
      fontFamily: 'RobotoCondensed'
    },
    detailText: {
      fontSize: NORMAL_FONT_SIZE,
      color: '#334155',
      lineHeight: 1.35,
      flex: 1,
      fontFamily: 'RobotoCondensed'
    },
    // Divider
    divider: {
      height: 1,
      backgroundColor: '#e2e8f0',
      marginVertical: 4
    }
  });
