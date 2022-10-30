import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

// UI's
import { Layout } from '@ui-kitten/components';

// Getting the window measurements
const height = Dimensions.get('window').height;

const LoginScreen = () => {
    return (
        <Layout>
            <ImageBackground 
                source={require("../assets/LoginPage.jpg")} 
                resizeMode="cover" imageStyle={styles.backgroundImageStyles}>
                {/* LOGIN CARD COMPONENT GOES HERE . . . */}
            </ImageBackground>
        </Layout>
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