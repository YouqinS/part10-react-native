import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { CREATE_USER } from '../graphql/mutations';
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        width: 300,
        height: 40,
        marginTop: 15,
        borderRadius: 6,
        padding: 10,
        textAlign: 'center',
        backgroundColor: theme.colors.primary,
    },
});

const initialValues = {
    username: '',
    password: '',
    passwordconfirmation: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, 'Username length must be between 1 and 30')
        .max(30, 'Username length must be between 1 and 30')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password length must be between 5 and 50')
        .max(50, 'Password length must be between 5 and 50')
        .required('Password is required'),
    passwordconfirmation: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password'), null], 'Passwords do not match')
});

const SignUpForm = () => {
    const authStorage = useAuthStorage();
    const [signIn] = useSignIn(authStorage);
    const navigate = useNavigate();

    const [ signUp ] = useMutation(CREATE_USER, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        },
    });

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const newUser = {username: values.username, password: values.password,};
            const signupResult = await signUp({ variables: { user: newUser } });
            console.log("sign up result: ", signupResult);

            if (signupResult.data.createUser?.id) {
                const signinResult = await signIn({ username, password });
                console.log("sign in result: ", signupResult);
                if (signinResult.data.authenticate?.accessToken) {
                    navigate('/');
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ handleSubmit }) => {
                return (
                    <View style={styles.container}>
                        <FormikTextInput name='username' placeholder='Username' />
                        <FormikTextInput name='password' placeholder='Password' secureTextEntry />
                        <FormikTextInput name='passwordconfirmation' placeholder='Password confirmation' secureTextEntry />
                        <Pressable onPress={handleSubmit}>
                            <Text style={styles.button} color='white' fontWeight='bold'>Sign Up</Text>
                        </Pressable>
                    </View>
                );
            }}
        </Formik>
    );
};

export default SignUpForm;