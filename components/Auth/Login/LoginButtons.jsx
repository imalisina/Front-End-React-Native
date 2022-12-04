import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

// UI
import tw from 'twrnc';
import { Button } from '@ui-kitten/components';
import { Text as UIText } from '@ui-kitten/components';

// Get device dimension
const { height, width, fontScale } = Dimensions.get("window");

const LoginButtons = ({navigation}) => {
    return (
        <>
        <Button 
            size='large' 
            status='danger'
            style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Login</Button>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={tw.style('mb-9')}>
            <UIText status='danger' style={[styles.linkNoteStyle, tw.style('mx-auto mt-2')]}>
                Haven't an account ? <Text style={tw.style('underline font-bold')}>Register</Text>
            </UIText>
        </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: width * 0.35,
        height: height * 0.07
    },
    linkNoteStyle: {
        fontSize: 11.3 * fontScale,
    }
});

export default LoginButtons;