import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

// UI's
import tw from 'twrnc';
import { Button } from '@ui-kitten/components';
import { Text as UIText } from '@ui-kitten/components';

// Icon
import { AntDesign } from '@expo/vector-icons';

// Get device dimension
const { height } = Dimensions.get("window");

const LoginButton = () => {
    return (
        <>
        <Button 
            size='large' 
            status='danger'
            accessoryRight={<AntDesign name="login" size={24} color="white" />}
            style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-xl')]}>
        </Button>
        <TouchableOpacity style={tw.style('mb-9')}>
            <UIText status='danger' style={[styles.linkNoteStyle, tw.style('mx-auto mt-2')]}>
                Haven't an account ? <Text style={tw.style('underline font-bold')}>Register</Text>
            </UIText>
        </TouchableOpacity>
        {/* PUT AUTH0 UI'S INSTEAD OF THESE BUTTONS */}
        <Button appearance='outline' status='basic' style={tw.style('w-88 mx-auto my-0.5')}>SOCIAL MEDIA 1</Button>
        <Button appearance='outline' status='basic' style={tw.style('w-88 mx-auto my-0.5')}>SOCIAL MEDIA 2</Button>
        <Button appearance='outline' status='basic' style={tw.style('w-88 mx-auto my-0.5')}>SOCIAL MEDIA 3</Button>
        {/* PUT AUTH0 UI'S INSTEAD OF THESE BUTTONS */}
        </>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 120,
        height: 55
    },
    linkNoteStyle: {
        fontSize: height * 0.015
    }
});

export default LoginButton;