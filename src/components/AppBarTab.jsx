import {View, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    padding: {
        padding: 5,
    },
});

const AppBarTab = () => {
    return (
        <View style={styles.container}>
            <Link to='/'>
                <Text style={styles.padding} color='white' fontWeight='bold' fontSize='subheading'>
                    Repositories
                </Text>
            </Link>
            <Link to='/signin'>
                <Text style={styles.padding} color='white' fontWeight='bold' fontSize='subheading'>
                    Sign in
                </Text>
            </Link>
        </View>
    );
};

export default AppBarTab;