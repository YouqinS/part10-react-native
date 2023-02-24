import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";
import {useNavigate} from "react-router-native";

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
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(2, 'Username must contain at least 2 characters')
            .required('Username is required'),
        password: yup
            .string()
            .min(3, 'Password must contain at least 3 characters')
            .required('Password is required'),
    });

    const onSubmit = async (values) => {
        console.log("sign in input: ", values);
        const {username, password} = values;

        try {
            const {data} = await signIn({username, password});
            console.log("sign in result: ", data);
            if (data.authenticate.accessToken) {
                navigate('/');
            }
        } catch (e) {
            console.log(e);
        }
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