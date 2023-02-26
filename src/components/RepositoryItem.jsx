import { View, Image, StyleSheet } from 'react-native';
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
});

const RepositoryItem = ({item}) => {
    return (
        <View style={styles.container} testID="repoItem">
            <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}}/>
            <View>
                <Text style={styles.name} fontWeight='bold' fontSize='subheading' testID='repoName'>{item.fullName}</Text>
                <Text style={styles.language} backgroundColor='primary' color='white' testID='repoLanguage'>{item.language}</Text>
            </View>
            <Text style={styles.description} testID='repoDescription'>{item.description}</Text>

            <View style={styles.statRow} >
                <Stat label="Stars" count={item.stargazersCount}/>
                <Stat label="Forks" count={item.forksCount}/>
                <Stat label="Reviews" count={item.reviewCount}/>
                <Stat label="Rating" count={item.ratingAverage}/>
            </View>
        </View>
    );
};

export default RepositoryItem;