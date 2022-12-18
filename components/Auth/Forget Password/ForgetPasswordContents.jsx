import { StyleSheet, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout, Text, Card } from '@ui-kitten/components';

// Icon
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// Get device dimension
const { width, height, fontScale } = Dimensions.get('window');

// Specify the card width based on screen size
const cardWidth = height >= 700 ? 0.40 * width : 0.43 * width;

const ForgetPasswordContents = ({ navigation }) => {
    return (
        <>
            <Layout style={[styles.container, tw.style('mt-8')]}>
                <Card onPress={() => navigation.navigate("SecureCodeMethod")} style={[styles.subContainer, tw.style('rounded-lg')]}>
                    <FontAwesome style={tw.style('mx-auto my-3')} name='user-secret' size={height * 0.12} />
                    <Text style={[tw.style('mx-auto'), styles.cardTitle]}>Secure Code</Text>
                </Card>
                <Card onPress={() => navigation.navigate("EmailMethod")} style={[styles.subContainer, tw.style('rounded-lg')]}>
                    <FontAwesome5 style={tw.style('mx-auto my-3')} name='mail-bulk' size={height * 0.12} />
                    <Text style={[tw.style('mx-auto'), styles.cardTitle]}>Email or SMS</Text>
                </Card>
            </Layout>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    subContainer: {
        width: cardWidth,
        height: 0.25 * height,
        justifyContent: 'center'
    },
    cardTitle: {
        fontSize: 14 * fontScale
    },
})

export default ForgetPasswordContents;