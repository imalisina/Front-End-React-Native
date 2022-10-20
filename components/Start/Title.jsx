import { View, StyleSheet } from 'react-native';

// Import Fonts
import { useFonts, NotoSans_400Regular } from '@expo-google-fonts/noto-sans';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico'

// Import Spinner
import LottieView from 'lottie-react-native'

// Tailwind Classes
import tw from 'twrnc';
import { Layout, Text } from '@ui-kitten/components';

const Title = () => {
    
    // Define Fonts
    let [fontsLoaded] = useFonts({
        NotoSans_400Regular,
        Pacifico_400Regular
    });
    
    if (!fontsLoaded) {
        return (
            <View>
                <LottieView 
                    style={tw.style('mx-auto my-39 w-30')}
                    source={require('../../assets/spinner.json')} autoPlay loop />
            </View>
        )
    } else {
        return (
            <Layout style={tw.style('mx-auto mt-50')}>
                <Text style={styles.firstTitle}>Welcome To</Text>
                <Text style={styles.secondTitle}>Aware</Text>
                <Text category='s1' appearance='hint' style={tw.style('mt-39 absolute left-36')}>Your AI Stylist</Text>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    firstTitle: {
        fontFamily: 'NotoSans_400Regular',
        fontSize: 30,
        textAlign: 'center',
    },
    secondTitle: {
        fontFamily: 'Pacifico_400Regular',
        fontSize: 90,
        position: 'absolute',
        color: '#be185d', // *Pink-700* On Tailwind Colors
        right: '-10%'
    }
})

export default Title;