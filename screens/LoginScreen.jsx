import { ImageBackground, StyleSheet } from 'react-native';

// UI's
import { Layout, Text } from '@ui-kitten/components';

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
        height: 800,
        opacity: 0.9
    }
});

export default LoginScreen;