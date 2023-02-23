import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    centerText: {
        textAlign: 'center',
    },
});

const Stat = ({stat, statItem}) => {
    const countInK = (count) => {
        return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
    }

    return (
        <View>
            <Text style={styles.centerText} fontWeight='bold'>{countInK(stat)}</Text>
            <Text style={styles.centerText}>{statItem}</Text>
        </View>
    );
};

export default Stat;