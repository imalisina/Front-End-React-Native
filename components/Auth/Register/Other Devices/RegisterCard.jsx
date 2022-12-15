import { StyleSheet, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout, Text } from '@ui-kitten/components';

// Other components
import RegisterContents from '../RegisterContents';

// Get device dimension
const { fontScale } = Dimensions.get("window");

// Keyboard Auto Scroll
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterCard = ({navigation}) => {
    return (
        <KeyboardAwareScrollView 
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false} 
            extraHeight={140}>
        <Layout style={[styles.cardContainer, tw.style('mx-auto')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Register</Text>
            <Text status='warning' style={[tw.style('mx-auto'), styles.cardSubHeader]}>Join to Aware family</Text>
            <RegisterContents navigation={navigation}/>
        </Layout>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        marginTop: '7%',
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