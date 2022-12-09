import { StyleSheet, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';

// Hook
import { useState } from 'react';

// Icon
import { Entypo } from '@expo/vector-icons';

// UI
import tw from 'twrnc';
import { Input, Text, Icon } from '@ui-kitten/components';

// Get device dimension
const { fontScale } = Dimensions.get('window');

const LoginInputs = () => {
    // Secure text entry state and its toggle method
    const [ secureTextEntry, setSecureTextEntry ] = useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    }
    // Component for show/hide toggle in password input field
    const renderIcons = () => {
        return(
            <TouchableWithoutFeedback onPress={toggleSecureEntry}>
                <Entypo name={secureTextEntry ? "eye" : "eye-with-line"} size={22} color="black" />
            </TouchableWithoutFeedback>
        );
    }
    return (
        <>
        <Input
            placeholder="Enter your email" 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Email"
            keyboardType='email-address'
            size="large" />
        <Input 
            placeholder="Enter your password" 
            placeholderTextColor='#9ca3af'
            accessoryRight={renderIcons}
            secureTextEntry={secureTextEntry}
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Password"
            caption={<TouchableOpacity activeOpacity={0.4}><Text style={[styles.linkNoteStyle, tw.style('text-zinc-400')]}>Forget your password ?</Text></TouchableOpacity>}
            size="large" />
        </>
    );
}

const styles = StyleSheet.create({
    inputStyles: {
        width: '90%',
        marginVertical: '2.5%'
    },
    linkNoteStyle:{
        textDecorationLine: 'underline',
        fontSize: 11.3 * fontScale,
    }
})

export default LoginInputs;