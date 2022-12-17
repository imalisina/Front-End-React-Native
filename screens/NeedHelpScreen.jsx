import { StyleSheet, View, Dimensions } from 'react-native';

// Get device dimensions
const { height } = Dimensions.get('window');

// Other components
import SupportFormContainer from '../components/Support/SupportFormContainer';

const NeedHelpScreen = ({ navigation }) => {
    return (
        <View style={styles.backgroundStyle}>
            <SupportFormContainer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: height,
        backgroundColor: 'white'
    }
});

export default NeedHelpScreen;