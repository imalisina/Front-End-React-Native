import { StyleSheet, Dimensions, Text, Platform } from 'react-native';

// UI's
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Other Components
import LoginInputs from './LoginInputs';
import LoginButtons from './LoginButtons';
import AlternativeLoginIOS from './AlternativeLoginIOS';
import AlternativeLoginAndroid from './AlternativeLoginAndroid';

// Get device dimension
const { height, fontScale } = Dimensions.get("window");

const LoginCard = () => {
    return (
        <Layout style={[styles.cardContainer, tw.style('mx-auto bg-white shadow-md rounded-md')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Login</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>Log into existing account</Text>
            <LoginInputs />
            <LoginButtons />
            {
                Platform.OS == "ios"
                ? (<AlternativeLoginIOS />)
                : (<AlternativeLoginAndroid />)
            }
        </Layout>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: height * 0.78,
        marginTop: '6%',
    },
    cardHeader: {
        fontSize: 30 / fontScale,
        marginBottom: "2%",
        marginTop: "4%",
    },
    cardSubHeader: {
        fontSize: 14 / fontScale,
        marginBottom: "6%",
    },
});

export default LoginCard;