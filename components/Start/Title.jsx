import { View, StyleSheet, Dimensions } from 'react-native';

// Import Fonts
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico'

// Import Spinner
import LottieView from 'lottie-react-native';

// Tailwind Classes
import { Layout, Text } from '@ui-kitten/components';

// Get device dimensions
const { height } = Dimensions.get("window"); 

const Title = () => {
    
    // Define Fonts
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });
    
    if (!fontsLoaded) {
        return (
            <View>
                <LottieView 
                    style={styles.spinner}
                    source={require('../../assets/spinner.json')} autoPlay loop />
            </View>
        )
    } else {
        return (
            <Layout style={styles.container}>
                <Text style={styles.firstTitle}>Welcome To</Text>
                <Text status='danger' style={styles.secondTitle}>Aware</Text>
                <Text style={styles.subtitle} category='s1' appearance='hint'>Your AI Stylist</Text>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    spinner: {
        width: '35%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30%',
    },
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: height * 0.15,
    },
    firstTitle: {
        fontSize: 30,
        textAlign: 'center',
    },
    secondTitle: {
        fontFamily: 'Pacifico_400Regular',
        fontSize: 90,
        position: 'absolute',
        right: '-10%',
    },
    subtitle: {
        position: "absolute",
        marginTop: '38%',
        left: '34%'
    }
})

export default Title;