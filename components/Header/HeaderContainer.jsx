import { View, Text, StyleSheet, Platform } from 'react-native';

// Font
import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico';

const HeaderContainer = () => {
    // Define Font
    useFonts({
        Pacifico_400Regular
    });
    return (
        <View>
            <Text style={Platform.OS === "android" ? styles.headerStyleAndroid : styles.headerStyleIOS}>Title</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyleAndroid: {
        fontFamily: 'Pacifico_400Regular',
    },
    headerStyleIOS: {
        fontFamily: 'Pacifico_400Regular',
    }
})

export default HeaderContainer;