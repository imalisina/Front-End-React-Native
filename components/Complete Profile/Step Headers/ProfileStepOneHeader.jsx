import { StyleSheet, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Text } from '@ui-kitten/components';

// Get device dimension
const { height, fontScale } = Dimensions.get('window');

const ProfileStepOneHeader = () => {
    return (
        <>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Personal Details</Text>
            <Text status='warning' style={[tw.style('mx-auto'), styles.cardSubHeader]}>Please enter your personal details</Text>
        </>
    );
}

const styles = StyleSheet.create({
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

export default ProfileStepOneHeader;