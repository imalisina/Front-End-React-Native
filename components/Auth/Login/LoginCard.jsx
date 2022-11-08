import { StyleSheet, Dimensions, Text } from 'react-native';

// UI's
import tw from 'twrnc';
import { Layout, Input } from '@ui-kitten/components';


const { height } = Dimensions.get("window");

const LoginCard = () => {
    return (
        <Layout style={[styles.cardContainer, tw.style('mx-auto bg-white shadow-md rounded-md')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Login</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>Log into existing account</Text>
            <Input 
                placeholder="Enter your email" 
                placeholderTextColor='#9ca3af'
                selectionColor='gray' 
                style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
                label="Email"
                size="large" />
            <Input 
                placeholder="Enter your password" 
                placeholderTextColor='#9ca3af'
                secureTextEntry={true}
                selectionColor='gray' 
                style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
                label="Password"
                size="large" />
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
    inputStyles: {
        width: '90%',
        marginVertical: '2.5%'
    }
});

export default LoginCard;