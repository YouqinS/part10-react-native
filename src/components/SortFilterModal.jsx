import {StyleSheet, TextInput, View} from "react-native";
import { Picker } from '@react-native-picker/picker';
import theme from "../theme";

const SortFilterModal = ({ filter, setFilter, sortBy, setSortBy }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.lightgrey
        },
        input: {
            height: 35,
            borderWidth: 1,
            borderColor: theme.colors.textPrimary,
            backgroundColor: theme.colors.white,
            ontSize: theme.fontSizes.subheading
        },
        picker: {
            height: 35,
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 0,
            backgroundColor: theme.colors.lightgrey,
            color: theme.colors.primary,
            fontSize: theme.fontSizes.subheading
        }
    });

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                       placeholder='search'
                       value={filter}
                       onChange={(event) => setFilter(event.target.value)} />
            <Picker
                style={styles.picker}
                selectedValue={sortBy}
                onValueChange={(itemValue) => setSortBy(itemValue)}
            >
                <Picker.Item label="Latest repositories" value="CREATED_AT" />
                <Picker.Item label="Highest rated repositories" value="DESC" />
                <Picker.Item label="Lowest rated repositories" value="ASC" />
            </Picker>
        </View>
    );
};

export default SortFilterModal;