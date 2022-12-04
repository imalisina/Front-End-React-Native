import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

// UI
import tw from 'twrnc';
import { Button } from '@ui-kitten/components';
import { Text as UIText } from '@ui-kitten/components';

// Get device dimension
const { height, width, fontScale } = Dimensions.get("window");

const RegisterButton = ({navigation}) => {
    return (
        <>
        <Button 
            size='large' 
            status='danger'
            style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Join</Button>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={tw.style('mb-9')}>
            <UIText status='danger' style={[styles.linkNoteStyle, tw.style('mx-auto mt-2')]}>
                Have an account ? <Text style={tw.style('underline font-bold')}>Login</Text>
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

export default RegisterButton;