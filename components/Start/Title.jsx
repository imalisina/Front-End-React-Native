import { View, StyleSheet, Dimensions, Platform } from 'react-native';

// Font
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico'

// UI
import { Text } from '@ui-kitten/components';

// Get device dimensions
const { height, fontScale } = Dimensions.get("window"); 

const Title = () => {
    // Define Font
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });
    // Check whether the font is loaded or not
    if (fontsLoaded) {    
    return (
            <View style={styles.container}>
                <Text style={[Platform.OS == "ios" ? styles.firstTitleIos : styles.firstTitleAndroid]}>Welcome To</Text>
                <Text status='danger' style={[Platform.OS == "ios" ? styles.secondTitleIos : styles.secondTitleAndroid]}>
                    Aware
                </Text>
                <Text style={[Platform.OS == "ios" ? styles.subtitleIos : styles.subtitleAndroid]} category='s1' appearance='hint'>Your AI Stylist</Text>
            </View>
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
        marginTop: height * 0.07,
    },
    firstTitleIos: {
        fontSize: 30 / fontScale,
        position: 'absolute',
        top: height * -0.012
    }, 
    firstTitleAndroid: {
        fontSize: 30 / fontScale,
        position: 'absolute',
        top: height * 0.01
    }, 
    secondTitleIos: {
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: 'Pacifico_400Regular',
        fontSize: 90 / fontScale,
        height: fontScale * 135
    },
    secondTitleAndroid: {
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: 'Pacifico_400Regular',
        fontSize: 100 / fontScale,
        height: fontScale * 135
    },
    subtitleIos: {
        textAlign: 'right'
    },
    subtitleAndroid: {
        textAlign: 'right',
        marginTop: '4%',
        marginRight: '-6%'
    },
})

export default Title;