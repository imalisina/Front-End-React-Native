import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';

// Font
import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico';

// Get device dimensions
const { height } = Dimensions.get("window");

const HeaderContainer = () => {
    // Define font
    useFonts({
        Pacifico_400Regular
    });
    return (
        <View>
            <Text style={Platform.OS === "android" ? styles.headerStyleAndroid : styles.headerStyleIOS}>Aware</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyleAndroid: {
        fontFamily: 'Pacifico_400Regular',
        fontSize: height * 0.033,
    },
    headerStyleIOS: {
        fontFamily: 'Pacifico_400Regular',
        fontSize: height * 0.04,
    }
})

export default HeaderContainer;