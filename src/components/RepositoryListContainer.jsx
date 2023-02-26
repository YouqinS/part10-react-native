import {FlatList, Pressable} from "react-native";
import RepositoryItem from "./RepositoryItem";
import SortFilterModal from "./SortFilterModal";
import {ItemSeparator} from "./ItemSeparator";

const RepositoryListContainer = ({repositories, navigate, fetchMore, filter, setFilter, sortBy, setSortBy}) => {

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            ListHeaderComponent={() => <SortFilterModal filter={filter}
                                                        setFilter={setFilter}
                                                        sortBy={sortBy}
                                                        setSortBy={setSortBy}/>}
            testID='repoItem'
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
                    <RepositoryItem repository={item} />
                </Pressable>
            )}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
        />
    );
}

export default RepositoryListContainer;