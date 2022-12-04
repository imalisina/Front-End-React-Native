import { StyleSheet, Dimensions, View } from 'react-native';

// UI
import tw from 'twrnc';
import { Button } from '@ui-kitten/components';

// Icon
import { AntDesign } from '@expo/vector-icons';

// Get device dimension
const { height, width } = Dimensions.get("window");

const AlternativeLoginOthers = () => {
    return (
        <View style={styles.cardContainer}>
            {/* Twitter login */}
            <Button
                appearance='ghost'
                status='basic'
                style={[styles.loginMethodCard, styles.twitter, tw.style('rounded-md')]}
                accessoryLeft={<AntDesign name="twitter" size={20} color="#1da1f2" />}>
                Login with Twitter
            </Button>
            {/* Apple login */}
            <Button
                appearance='ghost'
                status='basic'
                style={[styles.loginMethodCard, styles.apple, tw.style('rounded-md')]}
                accessoryLeft={<AntDesign name="apple1" size={20} color="#00000" />}>
                Login with Apple
            </Button>
            {/* Google login */}
            <Button
                appearance='ghost'
                status='basic'
                style={[styles.loginMethodCard, styles.google, tw.style('rounded-md')]}
                accessoryLeft={<AntDesign name="google" size={20} color="#db4a39" />}>
                Login with Google
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }, 
    loginMethodCard: {
        height: height * 0.07,
        width: width * 0.8,
        borderWidth: 1.3,
        marginBottom: 5,
    },
    twitter: {
        borderColor: '#1da1f2',
    },
    google: {
        borderColor: '#db4a39',
    },
    apple: {
        borderColor: '#00000',
    },
});

export default AlternativeLoginOthers;