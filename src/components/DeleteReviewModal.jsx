import {Modal, View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import Text from './Text';
import theme from '../theme';
import {useMutation} from "@apollo/client";
import {DELETE_REVIEW} from "../graphql/mutations";
import {ItemSeparator} from "./ItemSeparator";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        alignItems: 'stretch',
        backgroundColor: 'white',
        flex: 1,
        flexGrow: 0,
        minHeight: 150,
        margin: 25,
        borderRadius: 18,
        padding: 20,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
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

const DeleteReviewModal = ({
                               visible,
                               setVisible,
                               id: { repositoryId, reviewId },
                               refetch,
                           }) => {
    const closeModal = () => {
        console.log("closeModal")

        setVisible(false);
    };

    const [ deleteReview ] = useMutation(DELETE_REVIEW, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        },
    });
    const handleDelete = async (deleteReviewId) => {
        console.log("handleDelete")
        const result = await deleteReview({variables: {deleteReviewId}})
        console.log("deleteReview result: ", result);

        refetch();
    };

    console.log("visible: ", visible)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <TouchableOpacity style={styles.container} onPressOut={closeModal}>
                <View style={styles.modal}>
                    <Text fontWeight="bold" fontSize="subheading">
                        Delete review
                    </Text>
                    <ItemSeparator />
                    <Text>
                        Are you sure you want to delete this review?
                    </Text>
                    <ItemSeparator />
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={closeModal}>
                            <Text style={styles.buttonBlue} color='white' fontWeight='bold' >CANCEL</Text>
                        </Pressable>
                        <Pressable onPress={() => handleDelete(reviewId)}>
                            <Text style={styles.buttonRed} color='white' fontWeight='bold' >DELETE</Text>
                        </Pressable>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default DeleteReviewModal;