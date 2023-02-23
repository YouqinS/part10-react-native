import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    signin: {
        width: 300,
        height: 40,
        marginTop: 15,
        borderRadius: 6,
        padding: 10,
        textAlign: 'center',
        backgroundColor: theme.colors.primary,
    },
});

const SignIn = () => {
    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(6, 'Username must contain at least 6 characters')
            .required('Username is required'),
        password: yup
            .string()
            .min(8, 'Password must contain at least 8 characters')
            .required('Password is required'),
    });

    const onSubmit = (values) => {
        console.log("sign in input: ", values);
    };

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            {({ handleSubmit }) => {
                return (
                    <View style={styles.container}>
                        <FormikTextInput name='username' placeholder='Username' />
                        <FormikTextInput name='password' placeholder='Password' secureTextEntry />
                        <Pressable onPress={handleSubmit}>
                            <Text style={styles.signin} color='white' fontWeight='bold'>Sign In</Text>
                        </Pressable>
                    </View>
                );
            }}
        </Formik>
    );
};

export default SignIn;