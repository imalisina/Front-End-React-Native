import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import RegisterCardOthers from '../components/Auth/Register/Other Devices/RegisterCard';
import RegisterCardSmall from '../components/Auth/Register/Small devices/RegisterCard';

const RegisterScreen = ({navigation}) => {
    return (
        <View>
            <ImageBackground 
                source={require("../assets/RegisterPage.jpg")} 
                resizeMode="cover" imageStyle={styles.backgroundImageStyles}>
                {
                    height >= 660
                    ? (<RegisterCardOthers navigation={navigation} />)
                    : (<RegisterCardSmall navigation={navigation} />)
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