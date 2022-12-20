import { StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

// Hook
import { useState, useRef } from 'react';

// UI
import tw from 'twrnc';
import { Input, Button } from '@ui-kitten/components';

// Get device dimension
const { height, width } = Dimensions.get('window');

const SecureCodeMethodContents = ({ navigation }) => {
    // Reference to move to the next input
    const secureCodeRef = useRef();
    // Button activation state and its toggle method
    const [ isActive, setIsActive ] = useState(false);
    // Method to change the button activation status andd input operation/redirection
    const formHandler = () => {
        setIsActive(true);
        navigation.navigate("Verification");
        // FORM HANDLING SECTION GOES HERE ...
    }
    return (
        <>
        {/* Inputs section */}
        <Input
            placeholder="Enter your email"
            placeholderTextColor='#adadad'
            selectionColor='gray'
            status='warning'
            style={[tw.style('mx-auto'), styles.inputStyles]}
            label="Email"
            keyboardType='email-address'
            onSubmitEditing={() => {
                secureCodeRef.current.focus();
            }}
            blurOnSubmit={false}
            returnKeyType='next'
            size="large" />
        <Input
            placeholder="Enter your Secure Code" 
            placeholderTextColor='#adadad'
            selectionColor='gray'
            status='warning'
            style={[tw.style('mx-auto'), styles.inputStyles]}
            label="Secure Code"
            ref={secureCodeRef}
            returnKeyType='done'
            onBlur={() => formHandler()}
            size="large" />
        {/* Button section */}
        {
            !isActive
            ? (
                <Button 
                    size='large' 
                    status='primary'
                    onPress={() => formHandler()}
                    style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Verify</Button>
            ) : (
                <Button size='large' status='basic' style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]} 
                        accessoryLeft={<ActivityIndicator size="small" color="#DB2C66" />} />
            )
        }
        </>
    );
}

const styles = StyleSheet.create({
    inputStyles: {
        width: '90%',
        marginVertical: '2.5%'
    },
    buttonStyle: {
        width: width * 0.35,
        height: height * 0.07
    },
})

export default SecureCodeMethodContents;