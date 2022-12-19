import { StyleSheet, Dimensions, TouchableOpacity, Text, ActivityIndicator, Platform } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Hook
import { useState, useRef } from 'react';

// Icon
import { FontAwesome5 } from '@expo/vector-icons';

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
    // Button activation state and its toggle method
    const [ isActive, setIsActive ] = useState(false);
    // Method to change the button activation status andd input operation/redirection
    const formHandler = () => {
        setIsActive(true);
        navigation.navigate("CompleteProfile");
        // FORM HANDLING SECTION GOES HERE ...
    }
    // Secure text entry state and its toggle method
    const [ secureTextEntry, setSecureTextEntry ] = useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    }
    // Component for show/hide toggle in password input field
    const renderIcons = () => {
        return(
            <TouchableOpacity>
                <FontAwesome5 name={secureTextEntry ? "eye" : "eye-slash"} size={20} color="#171818" />
            </TouchableOpacity>
        );
    }
    // Getting details of selected country
    const { selectedCountryData } = useSelector((state) => state.countryDataReducer);

    return (
        <>
        {/* Inputs section */}
        <Input
            placeholder="Enter your full name" 
            placeholderTextColor='#adadad'
            selectionColor='gray' 
            status='warning'
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
            label="Name"
            returnKeyType='next'
            onSubmitEditing={() => {
                emailRef.current.focus();
            }}
            blurOnSubmit={false}
            size="large" />
        <Input
            placeholder="Enter your email" 
            placeholderTextColor='#adadad'
            selectionColor='gray' 
            status='warning'
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
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
            placeholderTextColor='#adadad'
            selectionColor='gray' 
            status='warning'
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
            label={`Phone number - ${selectedCountryData.alpha2Code}`}
            keyboardType={Platform.OS == "android" ? "phone-pad" : "numbers-and-punctuation"}
            returnKeyType='next'
            ref={phoneNumberRef}
            onSubmitEditing={() => {
                passwordRef.current.focus();
            }}
            blurOnSubmit={false}
            size="large" />
        <Input
            placeholder="Enter a secure password" 
            placeholderTextColor='#adadad'
            selectionColor='gray' 
            status='warning'
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
            label="Password"
            ref={passwordRef}
            secureTextEntry={secureTextEntry}
            accessoryRight={renderIcons}
            onFocus={() => toggleSecureEntry()}
            onBlur={() => {
                toggleSecureEntry();
                formHandler();
            }}
            size='large'/>
        {/* Button section */}
        {
            !isActive
            ? (
                <Button 
                    size='large' 
                    status='primary'
                    onPress={() => formHandler()}
                    style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Join</Button>
            ) : (
                <Button size='large' status='basic' style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]} 
                        accessoryLeft={<ActivityIndicator size="small" color="#DB2C66" />} />
            )
        }
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={tw.style('mb-9')}>
            <UIText status='primary' style={[styles.linkNoteStyle, tw.style('mx-auto mt-2')]}>
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