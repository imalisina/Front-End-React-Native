import { View, Text, StyleSheet } from 'react-native';

// Font
import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico';

const HeaderContainer = () => {

    // Define Font
    useFonts({
        Pacifico_400Regular
    });
    

    return (
        <View>
            <Text style={styles.headerStyle}>Title</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        fontFamily: 'Pacifico_400Regular'
    }
})

export default HeaderContainer;