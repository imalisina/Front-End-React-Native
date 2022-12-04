import { StyleSheet, Dimensions, Text, Platform } from 'react-native';

// UI's
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Other Components
import RegisterInputs from './RegisterInputs';

// Get device dimension
const { height, fontScale } = Dimensions.get("window");

const RegisterCard = () => {
    console.log(Dimensions.get('screen').height)
    return (
        <Layout style={[styles.cardContainer, tw.style('mx-auto bg-white shadow-md rounded-md')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Register</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>Join to Aware family</Text>
            <RegisterInputs />
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
        marginBottom: "2%",
    },
});

export default RegisterCard;