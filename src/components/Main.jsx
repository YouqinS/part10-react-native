import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SingleRepositoryView from "./SingleRepositoryView";
import ReviewForm from "./ReviewForm";
import SignUpForm from "./SignUpForm";
import MyReviewList from "./MyReviewList";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
            <Routes>
                <Route path="/" element={<RepositoryList/>} exact/>
                <Route path="/signin" element={<SignIn to="/" exact/>}/>
                <Route path='/signup' element={<SignUpForm/>} exact/>
                <Route path='/repositories/:id' element={<SingleRepositoryView/>} exact/>
                <Route path='/createReview' element={<ReviewForm/>} exact/>
                <Route path='/myReviews' element={<MyReviewList />} exact />
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </View>
    );
};

export default Main;