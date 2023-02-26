import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import {ItemSeparator} from "./ItemSeparator";

const SingleRepositoryView = () => {
    const id = useParams().id;

    const variables = {
        first: 6,
        repositoryId: id,
    };

    const result = useQuery(GET_REPOSITORY, {
        variables,
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        const canFetchMore = !result.loading && result.data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        result.fetchMore({
            variables: {
                after: result.data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    if (result.loading) return null;

    console.log("repo with id " + id, result)

    const reviewNodes = result.data.repository.reviews
        ? result.data.repository.reviews.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            ListHeaderComponent={() => <RepositoryItem repository={result.data.repository} singleRepoView={true} />}

            data={reviewNodes}
            renderItem={({ item }) => (
                <>
                    <ItemSeparator />
                    <ReviewItem reviewItem={item} />
                </>
            )}
            onEndReached={handleFetchMore}
            onEndReachedThreshold={0.5}
        />
    );
};

export default SingleRepositoryView;