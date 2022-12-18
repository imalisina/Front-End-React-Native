import { StyleSheet, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout, Text } from '@ui-kitten/components';

// Other components
import SecureCodeMethodContents from '../components/Auth/Forget Password/Secure Code Method/SecureCodeMethodContents';

// Get device dimension
const { fontScale, height } = Dimensions.get('window');

const SecureCodeMethodScreen = ({ navigation }) => {
    return (
        <Layout style={styles.backgroundStyle}>
            <Layout style={[styles.cardContainer, tw.style('mx-auto')]}>
                <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Secure Code</Text>
                <Text status='warning' style={[tw.style('mx-auto'), styles.cardSubHeader]}>Enter your Email and Secure Code</Text>
                <SecureCodeMethodContents navigation={navigation} />
            </Layout>
        </Layout>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: height,
        backgroundColor: 'white'
    },
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

export default SecureCodeMethodScreen;