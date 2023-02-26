import {FlatList} from 'react-native';
import {useQuery} from "@apollo/client";
import {ME} from '../graphql/queries';
import ReviewItem from './ReviewItem';
import {ItemSeparator} from "./ItemSeparator";

const MyReviewList = () => {
    const result = useQuery(ME, {
        variables: {includeReviews: true},
        fetchPolicy: 'cache-and-network',
    });


    if (result.loading || !result.data) return null;

    const myReviewNodes = result.data.me.reviews
        ? result.data?.me?.reviews.edges.map(edge => edge.node)
        : [];

    console.log("myReviewNodes: ", myReviewNodes)

    return (
            <FlatList
                data={myReviewNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item}) => <ReviewItem reviewItem={item} myReviews={true} refetch={result.refetch}/>}
            />
    );
};

export default MyReviewList;