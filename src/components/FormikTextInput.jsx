import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import {StyleSheet} from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    errorMsg: {
        color: theme.colors.red
    },
});
const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorMsg}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;