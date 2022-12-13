import { View, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import RegisterCardOthers from '../components/Auth/Register/Other Devices/RegisterCard';
import RegisterCardSmall from '../components/Auth/Register/Small devices/RegisterCard';

const RegisterScreen = ({navigation}) => {
    return (
        <View style={styles.backgroundStyle}>
            {/* Show different register pages based on height 
                Checks whether its height less than 660 or not */}
            {
                height >= 660
                ? (<RegisterCardOthers navigation={navigation} />)
                : (<RegisterCardSmall navigation={navigation} />)
            }
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

export default RegisterScreen;