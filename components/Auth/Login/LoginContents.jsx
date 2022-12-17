import { StyleSheet, Text, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';

// Hook
import { useState, useRef } from 'react';

// Icon
import { FontAwesome5 } from '@expo/vector-icons';

// UI
import tw from 'twrnc';
import { Input, Text as UIText, Button } from '@ui-kitten/components';

// Get device dimension
const { fontScale, height, width } = Dimensions.get('window');

const LoginContents = ({navigation}) => {
    // Reference to move to the next input
    const passwordRef = useRef();
    // Button activation state and its toggle method
    const [ isActive, setIsActive ] = useState(false);
    // Secure text entry state and its toggle method
    const [ secureTextEntry, setSecureTextEntry ] = useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    }
    // Component for show/hide toggle in password input field
    const renderIcons = () => {
        return(
            <TouchableOpacity onPress={toggleSecureEntry}>
                <FontAwesome5 name={secureTextEntry ? "eye" : "eye-slash"} size={20} color="#171818" />
            </TouchableOpacity>
        );
    }
    return (
        <>
        {/* Inputs section */}
        <Input
            placeholder="Enter your email" 
            placeholderTextColor='#adadad'
            selectionColor='gray'
            status='warning'
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
            label="Email"
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => {
                passwordRef.current.focus();
            }}
            blurOnSubmit={false}
            size="large" />
        <Input 
            placeholder="Enter your password" 
            placeholderTextColor='#adadad'
            accessoryRight={renderIcons}
            secureTextEntry={secureTextEntry}
            selectionColor='gray' 
            status='warning'
            returnKeyType='done'
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
            label="Password"
            ref={passwordRef}
            onSubmitEditing={() => setIsActive(true)}
            caption={
                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('ForgetPassword')}>
                    <UIText status='warning' style={styles.linkNoteStyle}>Forget your password ?</UIText>
                </TouchableOpacity>
            }
            size="large" />
        {/* Button section */}
        {
            !isActive
            ? (
                <Button 
                    size='large' 
                    status='primary'
                    onPress={() => setIsActive(true)}
                    style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Login</Button>
            ) : (
                <Button size='large' status='basic' style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]} 
                        accessoryLeft={<ActivityIndicator size="small" color="#DB2C66" />} />
            )
        }
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={tw.style('mb-9')}>
            <UIText status='primary' style={[styles.linkNoteStyle, tw.style('mx-auto mt-2')]}>
                Haven't an account ? <Text style={tw.style('underline font-bold')}>Register</Text>
            </UIText>
        </TouchableOpacity>
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
    },
    buttonStyle: {
        width: width * 0.35,
        height: height * 0.07
    },
})

export default LoginContents;