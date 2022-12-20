import { StyleSheet, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Other components
import ProfileStepOneContents from './Step Contents/ProfileStepOneContents';
import ProfileStepOneHeader from './Step Headers/ProfileStepOneHeader';
import ProfileStepTwoContents from './Step Contents/ProfileStepTwoContents';
import ProfileStepTwoHeader from './Step Headers/ProfileStepTwoHeader';

// Get device dimension
const { height } = Dimensions.get("window");

// Keyboard Auto Scroll
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompletetProfileContainer = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView 
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false} 
            extraHeight={140}>
        <Layout style={[styles.cardContainer, tw.style('mx-auto')]}>
            {/* First step */}
            {/* <ProfileStepOneHeader /> */}
            {/* <ProfileStepOneContents /> */}

            {/* Second step */}
            <ProfileStepTwoHeader />
            <ProfileStepTwoContents />
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
});

export default CompletetProfileContainer;