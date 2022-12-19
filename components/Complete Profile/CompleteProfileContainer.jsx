import { StyleSheet, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout, Text } from '@ui-kitten/components';

// Other components
import ProfileStepOneContents from './Step Contents/ProfileStepOneContents';

// Get device dimension
const { height, fontScale } = Dimensions.get("window");

// Keyboard Auto Scroll
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompletetProfileContainer = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView 
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false} 
            extraHeight={140}>
        <Layout style={[styles.cardContainer, tw.style('mx-auto')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Personal Details</Text>
            <Text status='warning' style={[tw.style('mx-auto'), styles.cardSubHeader]}>Please complete your profile</Text>
            <ProfileStepOneContents navigation={navigation}/>
        </Layout>
        </KeyboardAwareScrollView>
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

export default CompletetProfileContainer;