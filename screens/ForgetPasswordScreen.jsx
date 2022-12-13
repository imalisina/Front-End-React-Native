import { View, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import ForgetPasswordCard from '../components/Auth/Forget Password/ForgetPasswordCard';

const ForgetPasswordScreen = () => {
    return (
        <View style={styles.backgroundStyle}>
            <ForgetPasswordCard />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: height,
        backgroundColor: 'white',
    }
});

export default ForgetPasswordScreen;