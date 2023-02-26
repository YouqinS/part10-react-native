import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    centerText: {
        textAlign: 'center',
    },
});

const Stat = ({count, label}) => {
    const countInK = (count) => {
        return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
    }

    return (
        <View testID='repoStats'>
            <Text style={styles.centerText} fontWeight='bold'>{countInK(count)}</Text>
            <Text style={styles.centerText}>{label}</Text>
        </View>
    );
};

export default Stat;