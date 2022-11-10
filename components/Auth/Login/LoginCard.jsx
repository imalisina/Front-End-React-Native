import { StyleSheet, Dimensions, Text } from 'react-native';

// UI's
import tw from 'twrnc';
import { Layout, Button } from '@ui-kitten/components';

// Icon
import { AntDesign } from '@expo/vector-icons';

// Other Components
import Inputs from './Inputs';

const { height } = Dimensions.get("window");

const LoginCard = () => {
    return (
        <Layout style={[styles.cardContainer, tw.style('mx-auto bg-white shadow-md rounded-md')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Login</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>Log into existing account</Text>
            <Inputs />
            <Text style={styles.linkStyles}>Forget your password ?</Text>
            <Button 
                size='large' 
                status='danger'
                accessoryRight={<AntDesign name="login" size={24} color="white" />}
                style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-xl')]}>
            </Button>
        </Layout>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: height * 0.7,
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
    buttonStyle: {
        width: 120,
        height: 55
    },
    linkStyles: {
        textDecorationLine: 'underline',
    },
});

export default LoginCard;