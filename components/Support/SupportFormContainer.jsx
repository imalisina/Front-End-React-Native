import { StyleSheet, Dimensions, Text } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Get device dimension
const { height, fontScale } = Dimensions.get("window");

// Other components
import SupportFormContents from './SupportFormContents';

const SupportFormContainer = () => {
    return (
        <Layout style={[tw.style('mx-auto'), styles.cardContainer]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Need Help ?</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>
                Tell us what your problem is
            </Text>
            <SupportFormContents />
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