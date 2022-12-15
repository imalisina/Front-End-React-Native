import { View, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import ForgetPasswordCard from '../components/Auth/Forget Password/ForgetPasswordCard';

const ForgetPasswordScreen = ({ navigation }) => {
    return (
        <View style={styles.backgroundStyle}>
            <ForgetPasswordCard navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        backgroundColor: 'white',
    }
});

export default ForgetPasswordScreen;