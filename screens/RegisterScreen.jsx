import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import RegisterCard from '../components/Auth/Register/Other Devices/RegisterCard';

const RegisterScreen = () => {
    return (
        <View>
            <ImageBackground 
                source={require("../assets/RegisterPage.jpg")} 
                resizeMode="cover" imageStyle={styles.backgroundImageStyles}>
                {
                    
                }
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImageStyles: {
        width: '100%',
        height: height,
        opacity: 0.9
    }
});

export default RegisterScreen;