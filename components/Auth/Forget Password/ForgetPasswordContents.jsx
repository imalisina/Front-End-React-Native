import { StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout, Text, Card } from '@ui-kitten/components';

// Icon
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// Get device dimension
const { width, height, fontScale } = Dimensions.get('window');

// Specify the card width based on screen size
const cardWidth = height >= 700 ? 0.40 * width : 0.43 * width;

const ForgetPasswordContents = () => {
    return (
        <>
            <Layout style={[styles.container, tw.style('mt-10')]}>
                <Card style={[styles.subContainer, tw.style('rounded-lg')]}>
                    <FontAwesome style={tw.style('mx-auto')} name='user-secret' size={height * 0.12} />
                    <Text style={[tw.style('mx-auto'), styles.cardTitle]}>Secure Code</Text>
                </Card>
                <Card style={[styles.subContainer, tw.style('rounded-lg')]}>
                    <FontAwesome style={tw.style('mx-auto')} name='user-secret' size={height * 0.12} />
                    <Text style={[tw.style('mx-auto'), styles.cardTitle]}>Secure Code</Text>
                </Card>
            </Layout>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 0.2 * height,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    subContainer: {
        width: cardWidth,
        height: 0.2 * height,
        justifyContent: 'center'
    },
    cardTitle: {
        fontSize: 14 * fontScale
    },
})

export default ForgetPasswordContents;