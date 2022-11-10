import { StyleSheet, Dimensions, Text } from 'react-native';

// UI's
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Other Components
import LoginInputs from './LoginInputs';
import LoginButtons from './LoginButtons';

// Get device dimension
const { height } = Dimensions.get("window");

const LoginCard = () => {
    return (
        <Layout style={[styles.cardContainer, tw.style('mx-auto bg-white shadow-md rounded-md')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Login</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>Log into existing account</Text>
            <LoginInputs />
            <LoginButtons />
        </Layout>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: height * 0.74,
        marginTop: '10%',
    },
    cardHeader: {
        fontSize: height * 0.04,
        marginBottom: "2%",
        marginTop: "4%",
    },
    cardSubHeader: {
        fontSize: height * 0.018,
        marginBottom: "4%",
    },
});

export default LoginCard;