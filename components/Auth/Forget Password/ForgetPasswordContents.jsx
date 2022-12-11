import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout, Text, Card } from '@ui-kitten/components';

// Icon
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// Get device dimension
const { width, height, fontScale } = Dimensions.get('window');

const ForgetPasswordContents = () => {
    return (
        <>
            <Layout style={styles.container}>
                <Card style={[styles.subContainer, tw.style('rounded-lg')]}>
                    <FontAwesome style={tw.style('mx-auto')} name='user-secret' size={90} />
                    <Text style={tw.style('mx-auto')}>Secure Code</Text>
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
        width: 0.4 * width,
        justifyContent: 'center'
    }
})

export default ForgetPasswordContents;