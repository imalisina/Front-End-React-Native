import { StyleSheet, Dimensions } from 'react-native';

// UI's
import { Layout, Input, Text } from '@ui-kitten/components';

const { height } = Dimensions.get("window");

const LoginCard = () => {
    return (
        <Layout style={styles.cardContainer}>
            <Text>Text inputs goes here . . .</Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        height: height * 0.7,
        marginTop: '10%',
        backgroundColor: 'white'
    }
});

export default LoginCard;