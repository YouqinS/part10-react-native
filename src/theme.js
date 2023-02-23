import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        cardBackground: '#afafaf',
        primary: '#0366d6',
        white: '#FFFFFF',
        error: '#d73a4a',
    },
    fontSizes: {
        body: 14,
        subheading: 16,
        tab: 28,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default theme;