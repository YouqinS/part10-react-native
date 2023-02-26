import {FlatList, StyleSheet, View} from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryListContainer = ({repositories}) => {
    const styles = StyleSheet.create({
        separator: {
            height: 10,
        },
    });
    const ItemSeparator = () => <View style={styles.separator} />;

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            testID='repoItem'
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />}
        />
    );
}

export default RepositoryListContainer;