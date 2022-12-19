import { View, StyleSheet, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other Components
import CompleteProfileContainer from '../components/Complete Profile/CompleteProfileContainer';

const CompleteProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.backgroundStyle}>
            <CompleteProfileContainer navigation={navigation}/>
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

export default CompleteProfileScreen;