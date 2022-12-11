import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import ForgetPasswordCard from '../components/Auth/Forget Password/ForgetPasswordCard';

const ForgetPasswordScreen = () => {
    return (
        <View>
            <ImageBackground 
                source={require("../assets/ForgetPasswordPage.jpg")} 
                resizeMode="cover" imageStyle={styles.backgroundImageStyles}>
                <ForgetPasswordCard />
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

export default ForgetPasswordScreen;