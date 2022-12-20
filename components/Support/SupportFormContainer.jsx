import { StyleSheet, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout, Text } from '@ui-kitten/components';

// Get device dimension
const { height, fontScale } = Dimensions.get("window");

// Keyboard Auto Scroll
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Other components
import SupportFormContents from './SupportFormContents';

const SupportFormContainer = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView 
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            extraHeight={140}>
        <Layout style={[tw.style('mx-auto'), styles.cardContainer]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Need Help ?</Text>
            <Text status='warning' style={[tw.style('mx-auto'), styles.cardSubHeader]}>
                Tell us what your problem is
            </Text>
            <SupportFormContents navigation={navigation}/>
        </Layout>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: height >= 600 ? height * 0.8 : height * 1.2,
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

export default SupportFormContainer;