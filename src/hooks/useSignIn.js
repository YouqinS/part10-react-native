import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();

    const [ mutate, result ] = useMutation(SIGN_IN, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        }
    });

    const signIn = async ({ username, password }) => {
        const response = await mutate({
            variables: { username, password }
        });

        console.log("sign in response: ", response)
        console.log("sign in accessToken: ", response.data.authenticate.accessToken)

        await authStorage.setAccessToken(response.data.authenticate.accessToken);

        await apolloClient.resetStore();

        return response;
    };

    return [ signIn ];
};

export default useSignIn;