import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        padding: 10,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 6,
    },
});

const TextInput = ({ ...props }) => {
    return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;