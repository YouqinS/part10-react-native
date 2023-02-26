import {Formik} from "formik";
import {Pressable, StyleSheet, View} from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from "yup";
import theme from "../theme";

const SignInContainer = ({onSubmit}) => {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            alignItems: 'center'
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
                            <Text style={styles.button} color='white' fontWeight='bold'>Sign In</Text>
                        </Pressable>
                    </View>
                );
            }}
        </Formik>
    );
}

export default SignInContainer;