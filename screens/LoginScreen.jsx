import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import LoginCard from '../components/Auth/Login/LoginCard';

const LoginScreen = () => {
    return (
        <View>
            <ImageBackground 
                source={require("../assets/LoginPage.jpg")} 
                resizeMode="cover" imageStyle={styles.backgroundImageStyles}>
                <LoginCard />
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

export default LoginScreen;