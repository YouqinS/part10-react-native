import {View, StyleSheet, Pressable, Alert, Button} from "react-native";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { format } from 'date-fns';
import Text from "./Text";
import theme from "../theme";
import DeleteReviewModal from "./DeleteReviewModal";
import {useState} from "react";

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.lightgrey,
        padding: 15,
    },
    rating: {
        height: 56,
        width: 56,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginLeft: 65,
        marginBottom: 10,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonBlue: {
        height: 40,
        marginTop: 15,
        borderRadius: 6,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    buttonRed: {
        height: 40,
        marginTop: 15,
        borderRadius: 6,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.red,
    },
});

const ReviewItem = ({ reviewItem, myReviews, refetch}) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState({});
    const openModal = (repositoryId, reviewId) => {
        setVisible(true);
        setId({repositoryId, reviewId});
    };

    return (
        <View style={styles.card}>
            <View style={styles.rating}>
                <Text color='primary' fontWeight='bold' fontSize='subheading'>{reviewItem.rating}</Text>
            </View>
            {myReviews
                ?
                <Text style={styles.text} fontWeight='bold' fontSize='subheading'>{reviewItem.repository.fullName}</Text>
                :
                <Text style={styles.text} fontWeight='bold' fontSize='subheading'>{reviewItem.user.username}</Text>
            }
            <Text style={styles.text} >{format(new Date(reviewItem.createdAt), 'dd.MM.yyy')}</Text>
            <Text style={styles.text}>{reviewItem.text}</Text>
            {myReviews &&
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => navigate(`/repositories/${reviewItem.repository.id}`)}>
                        <Text style={styles.buttonBlue} color='white' fontWeight='bold' >View repository</Text>
                    </Pressable>
                    <Pressable onPress={() => openModal(reviewItem.repository.id, reviewItem.id)}>
                        <Text style={styles.buttonRed} color='white' fontWeight='bold' >Delete review</Text>
                    </Pressable>
                    <DeleteReviewModal visible={visible} setVisible={setVisible} id={id} refetch={refetch}/>
                </View>
            }
        </View>
    );
};

export default ReviewItem;