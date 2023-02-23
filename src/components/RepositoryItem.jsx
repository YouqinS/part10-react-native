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
        <View style={styles.container}>
            <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}}/>
            <View>
                <Text style={styles.name} fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
                <Text style={styles.language} backgroundColor='primary' color='white'>{item.language}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.statRow}>
                <Stat statItem="Stars" stat={item.stargazersCount}/>
                <Stat statItem="Forks" stat={item.forksCount}/>
                <Stat statItem="Reviews" stat={item.reviewCount}/>
                <Stat statItem="Rating" stat={item.ratingAverage}/>
            </View>
        </View>
    );
};

export default RepositoryItem;