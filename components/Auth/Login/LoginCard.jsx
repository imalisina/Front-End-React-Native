import { StyleSheet, Dimensions, Text } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Other components
import LoginContents from './LoginContents';
import AlternativeLoginOthers from './AlternativeLoginOthers';
import AlternativeLoginSmall from './AlternativeLoginSmall';

// Get device dimension
const { height, fontScale } = Dimensions.get("window");

const LoginCard = ({navigation}) => {
    return (
        <Layout style={[styles.cardContainer, tw.style('mx-auto bg-white shadow-md rounded-md')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Login</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>Log into existing account</Text>
            <LoginContents navigation={navigation}/>
            {
                height >= 700
                ? (<AlternativeLoginOthers />)
                : (<AlternativeLoginSmall />)
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
        fontSize: height * 0.04 / fontScale,
        marginBottom: "2%",
        marginTop: "4%",
    },
    cardSubHeader: {
        fontSize: 14 / fontScale,
        marginBottom: "2%",
    },
});

export default LoginCard;