import { View, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import LoginCard from '../components/Auth/Login/LoginCard';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.backgroundStyle}>
            <LoginCard navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: height,
        backgroundColor: 'white'
    }
});

export default LoginScreen;