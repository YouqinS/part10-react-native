import {useMutation} from '@apollo/client';
import {CREATE_REVIEW} from '../graphql/mutations';
import {GET_REPOSITORIES} from '../graphql/queries';

const useReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW, {
        onError: (error) => {
            console.error(error.graphQLErrors[0]);
        },
        refetchQueries: [{ query: GET_REPOSITORIES }],
    });

    const createReview = async ({ repoName, repoOwnerName, rating, reviewText }) => {
        const response = await mutate({variables: {review: {repoName, repoOwnerName, rating, reviewText}}});
        console.log("createReview response: ", response);
        return response;
    };

    return [createReview, result];
};

export default useReview;