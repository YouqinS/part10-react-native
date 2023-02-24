import {View, StyleSheet, Pressable} from 'react-native';
import {Link, useNavigate} from 'react-router-native';

import Text from './Text';
import useAuthStorage from "../hooks/useAuthStorage";
import {useApolloClient, useQuery} from "@apollo/client";
import {ME} from "../graphql/queries";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    padding: {
        padding: 5,
    },
});

const AppBarTab = () => {
    const navigate = useNavigate();
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const queryMe = useQuery(ME, {
        fetchPolicy: 'cache-and-network',
    });

    const signOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
        navigate('/signin')
    };

    return (
        <View style={styles.container}>
            <Link to='/'>
                <Text style={styles.padding} color='white' fontWeight='bold' fontSize='subheading'>
                    Repositories
                </Text>
            </Link>
            {!queryMe.loading && !queryMe.data.me
                ?
                <Pressable onPress={() => navigate('/signin')}>
                    <Text style={styles.padding} color='white' fontWeight='bold' fontSize='subheading'>
                        Sign in
                    </Text>
                </Pressable>
                :
                <Pressable onPress={signOut}>
                    <Text style={styles.padding} color='white' fontWeight='bold' fontSize='subheading'>
                        Sign out
                    </Text>
                </Pressable>
            }
        </View>
    );
};

export default AppBarTab;