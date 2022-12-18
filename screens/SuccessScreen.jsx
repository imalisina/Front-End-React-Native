import { StyleSheet, Dimensions, View, AppRegistry } from 'react-native';

// Hook
import { useEffect } from 'react';

// Animation
import LottieView from 'lottie-react-native';

// UI
import tw from 'twrnc';
import { Layout, Text } from '@ui-kitten/components';

// Confetti
import Confetti from 'react-native-confetti';

// Get device dimension
const { fontScale, height } = Dimensions.get('window');

const SuccessScreen = ({ navigation }) => {
    useEffect(() => {
        if(_confettiView) {
            _confettiView.startConfetti();
         }
         setTimeout(function(){
            // method to redirect user
            navigation.navigate("Login");
        }, 3000);
    });
    return (
        <View style={styles.backgroundStyle}>
            <Layout style={[styles.cardContainer, tw.style('mx-auto')]}>
                <Text category='h1' style={[tw.style('mx-auto'), styles.cardHeader]}>Success</Text>
                <Text status='warning' style={[tw.style('mx-auto'), styles.cardSubHeader]}>Operation completed successfully</Text>
                {/* Confetti View */}
                <Confetti untilStopped={true} duration={4000} size={2} timeout={1} ref={(node) => _confettiView=node} />
                <LottieView autoPlay style={[styles.successAnimation, tw.style('mx-auto')]} source={require('../assets/animation.json')} />
            </Layout>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: height,
        backgroundColor: 'white'
    },
    cardContainer: {
        width: '90%',
        height: height * 0.78,
        marginTop: '6%',
    },
    cardHeader: {
        fontSize: height * 0.06 / fontScale,
        marginBottom: "2%",
        marginTop: "4%",
    },
    cardSubHeader: {
        fontSize: 14 / fontScale,
        marginBottom: "2%",
    },
    successAnimation: {
        width: 200,
        height: 200,
    }
});

export default SuccessScreen;