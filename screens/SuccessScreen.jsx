import { StyleSheet, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout, Text } from '@ui-kitten/components';

// Get device dimension
const { fontScale, height } = Dimensions.get('window');

const SuccessScreen = ({ navigation }) => {
    return (
        <Layout style={styles.backgroundStyle}>
            <Layout style={[styles.cardContainer, tw.style('mx-auto')]}>
                <Text category='h1' style={[tw.style('mx-auto'), styles.cardHeader]}>Success</Text>
                <Text status='warning' style={[tw.style('mx-auto'), styles.cardSubHeader]}>Operation completed successfully</Text>
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
        fontSize: height * 0.06 / fontScale,
        marginBottom: "2%",
        marginTop: "4%",
    },
    cardSubHeader: {
        fontSize: 14 / fontScale,
        marginBottom: "2%",
    },
});

export default SuccessScreen;