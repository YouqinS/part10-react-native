import useSignIn from "../hooks/useSignIn";
import {useNavigate} from "react-router-native";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        console.log("sign in input: ", values);
        const {username, password} = values;

        try {
            const {data} = await signIn({username, password});
            console.log("sign in result: ", data);
            if (data.authenticate.accessToken) {
                navigate('/');
            }
        } catch (e) {
            console.log(e);
        }
    };

return <SignInContainer onSubmit={onSubmit}/>
};

export default SignIn;