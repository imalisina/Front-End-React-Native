import { StyleSheet, Dimensions, Text, View } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Other components
import RegisterInputs from '../RegisterInputs';
import RegisterButton from '../RegisterButton';

// Get device dimension
const { fontScale, height } = Dimensions.get("window");

// Keyboard Auto Scroll
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RegisterCard = ({navigation}) => {
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Layout style={[styles.cardContainer, tw.style('mx-auto bg-white shadow-md rounded-md')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Register</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>Join to Aware family</Text>
            <RegisterInputs />
            <RegisterButton navigation={navigation} />
        </Layout>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        marginTop: '3%',
    },
    cardHeader: {
        fontSize: height * 0.04 / fontScale,
        // fontSize: 30 / fontScale,
        marginBottom: "2%",
        marginTop: "4%",
    },
    cardSubHeader: {
        fontSize: 14 / fontScale,
        marginBottom: "2%",
    },
});

export default RegisterCard;