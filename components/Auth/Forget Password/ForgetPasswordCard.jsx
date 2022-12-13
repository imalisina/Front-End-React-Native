import { StyleSheet, Dimensions, Text } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Other components
import ForgetPasswordContents from './ForgetPasswordContents';

// Get device dimension
const { height, fontScale } = Dimensions.get("window");

const ForgetPasswordCard = () => {
    return (
        <Layout style={[styles.cardContainer, tw.style('mx-auto')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Password Recovery</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>
                Select one method of the methods
            </Text>
            <ForgetPasswordContents />
        </Layout>
    )
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

export default ForgetPasswordCard;