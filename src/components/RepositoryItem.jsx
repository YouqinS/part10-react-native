import {View, Image, StyleSheet, Pressable, Linking} from 'react-native';
import Text from './Text';
import Stat from "./Stat";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.cardBackground,
        padding: 10,
        borderRadius: 5,
    },
    avatar: {
        height: 55,
        width: 55,
        borderRadius: 8,
        position: 'absolute'
    },
    name: {
        marginLeft: 65,
        marginBottom: 10,
    },
    language: {
        marginLeft: 65,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    description: {
        marginTop: 10,
        marginBottom: 10,
    },
    statRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: "80%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 15,
        borderRadius: 5,
    }
});

const RepositoryItem = ({repository, singleRepoView}) => {
    return (
        <View style={styles.container} testID="repoItem">
            <Image style={styles.avatar} source={{uri: repository.ownerAvatarUrl}}/>
            <View>
                <Text style={styles.name} fontWeight='bold' fontSize='subheading' testID='repoName'>{repository.fullName}</Text>
                <Text style={styles.language} backgroundColor='primary' color='white' testID='repoLanguage'>{repository.language}</Text>
            </View>
            <Text style={styles.description} testID='repoDescription'>{repository.description}</Text>

            <View style={styles.statRow} >
                <Stat label="Stars" count={repository.stargazersCount}/>
                <Stat label="Forks" count={repository.forksCount}/>
                <Stat label="Reviews" count={repository.reviewCount}/>
                <Stat label="Rating" count={repository.ratingAverage}/>
            </View>
            {singleRepoView &&
                <Pressable style={{ alignItems: 'center' }} onPress={() => Linking.openURL(repository.url)}>
                    <Text style={styles.button} color='white' backgroundColor='primary' fontWeight='bold' fontSize='subheading'>Open in GitHub</Text>
                </Pressable>
            }
        </View>
    );
};

export default RepositoryItem;