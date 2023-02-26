import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from "../theme";
import useReview from "../hooks/useReview";

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
    repoOwnerName: '',
    repoName: '',
    rating: '',
    reviewText: '',
};

const validationSchema = yup.object().shape({
    repoOwnerName: yup
        .string()
        .required('Repository owner name is required'),
    repoName: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .integer()
        .typeError('Rating must be a number')
        .min(0, 'Rating must be bigger than 0')
        .max(100, 'Rating must be under 100')
        .required('Rating is required'),
    reviewText: yup
        .string(),
});

const ReviewForm = () => {
    const [createReview] = useReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { repoName, repoOwnerName, rating, reviewText } = values;
        console.log("new review input: ", values)
        try {
            const { data } = await createReview({
                repoName,
                repoOwnerName,
                rating: Number(rating),
                reviewText,
            });
            console.log('new review response: ', data);
            if (data?.createReview?.repositoryId) {
                navigate(`/repositories/${data.createReview.repositoryId}`);
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
                        <FormikTextInput name='repoOwnerName' placeholder='Repository owner name' />
                        <FormikTextInput name='repoName' placeholder='Repository name' />
                        <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
                        <FormikTextInput name='reviewText' placeholder='Review' multiline />
                        <Pressable onPress={handleSubmit}>
                            <Text style={styles.button} color='white' fontWeight='bold'>Create a review</Text>
                        </Pressable>
                    </View>
                );
            }}
        </Formik>
    );
};

export default ReviewForm;