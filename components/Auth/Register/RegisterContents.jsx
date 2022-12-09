import { StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Hook
import { useState, useRef } from 'react';

// Icon
import { Entypo } from '@expo/vector-icons';

// UI
import tw from 'twrnc';
import { Input, Button, Text as UIText } from '@ui-kitten/components';

// Get device dimension
const { fontScale, height, width } = Dimensions.get('window');

const RegisterContents = ({navigation}) => {
    // Reference to move to the next input
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const passwordRef = useRef();

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
    // Getting details of selected country
    const { selectedCountryData } = useSelector((state) => state.countryDataReducer);

    return (
        <>
        {/* Inputs section */}
        <Input
            placeholder="Enter your full name" 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Name"
            returnKeyType='next'
            onSubmitEditing={() => {
                emailRef.current.focus();
            }}
            blurOnSubmit={false}
            size="large" />
        <Input
            placeholder="Enter your email" 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Email"
            keyboardType='email-address'
            returnKeyType='next'
            ref={emailRef}
            onSubmitEditing={() => {
                phoneNumberRef.current.focus();
            }}
            blurOnSubmit={false}
            size="large" />
        <Input 
            placeholder={"(+" + selectedCountryData.callingCodes + ") XXX-XXX-XXX"} 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Phone number"
            returnKeyType='next'
            ref={phoneNumberRef}
            onSubmitEditing={() => {
                passwordRef.current.focus();
            }}
            blurOnSubmit={false}
            size="large" />
        <Input
            placeholder="Enter a secure password" 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Password"
            ref={passwordRef}
            secureTextEntry={secureTextEntry}
            accessoryRight={renderIcons}
            size='large'/>
        {/* Button section */}
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
    inputStyles: {
        width: '90%',
        marginVertical: '2.5%',
    },
    linkNoteStyle:{
        textDecorationLine: 'underline',
        fontSize: 11.3 * fontScale,
    },
    buttonStyle: {
        width: width * 0.35,
        height: height * 0.07
    },
    linkNoteStyle: {
        fontSize: 11.3 * fontScale,
    }
})

export default RegisterContents;