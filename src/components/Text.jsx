import { Text as NativeText, StyleSheet} from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorTextLight: {
        color: theme.colors.light,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorWhite: {
        color: theme.colors.white,
    },
    backgroundColorTheme: {
        backgroundColor: theme.colors.primary,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    fontSizeTab: {
        fontSize: theme.fontSizes.tab,
    },
});

const Text = ({ color, backgroundColor, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        backgroundColor === 'primary' && styles.backgroundColorTheme,
        color === 'primary' && styles.colorPrimary,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'white' && styles.colorWhite,
        color === 'textLight' && styles.colorTextLight,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        fontSize === 'tab' && styles.fontSizeTab,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;