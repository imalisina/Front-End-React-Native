import { StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';

// Hook
import { useState, useRef } from 'react';

// Icon
import { FontAwesome5 } from '@expo/vector-icons';

// UI
import tw from 'twrnc';
import { Input, Button } from '@ui-kitten/components';

// Get device dimension
const { height, width } = Dimensions.get('window');

const ChangePasswordContents = ({ navigation }) => {
    // Reference to move to the next input
    const passwordConfirmation = useRef();
    // Button activation state and its toggle method
    const [ isActive, setIsActive ] = useState(false);
    // Secure text entry state and its toggle method for each password input
    const [ secureTextEntryOne, setSecureTextEntryOne ] = useState(true);
    const [ secureTextEntryTwo, setSecureTextEntryTwo ] = useState(true);
    const toggleSecureEntryOne = () => {
        setSecureTextEntryOne(!secureTextEntryOne);
    }
    const toggleSecureEntryTwo = () => {
        setSecureTextEntryTwo(!secureTextEntryTwo);
    }
    // Component for show/hide toggle in each password input field
    const renderIconsOne = () => {
        return(
            <TouchableOpacity onPress={toggleSecureEntryOne}>
                <FontAwesome5 name={secureTextEntryOne ? "eye" : "eye-slash"} size={20} color="#171818" />
            </TouchableOpacity>
        );
    }
    const renderIconsTwo = () => {
        return(
            <TouchableOpacity onPress={toggleSecureEntryTwo}>
                <FontAwesome5 name={secureTextEntryTwo ? "eye" : "eye-slash"} size={20} color="#171818" />
            </TouchableOpacity>
        );
    }
    // Method to change the button activation status andd input operation/redirection
    const formHandler = () => {
        setIsActive(true);
        navigation.navigate("Success");
        // FORM HANDLING SECTION GOES HERE ...
    }
    return (
        <>
        {/* Inputs section */}
        <Input
            placeholder="Enter your new password" 
            placeholderTextColor='#adadad'
            selectionColor='gray'
            status='warning'
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
            label="New password"
            secureTextEntry={secureTextEntryOne}
            accessoryRight={renderIconsOne}
            onFocus={() => toggleSecureEntryOne()}
            onSubmitEditing={() => {
                toggleSecureEntryOne();
                passwordConfirmation.current.focus();
            }}
            blurOnSubmit={false}
            returnKeyType='next'
            size="large" />
        <Input
            placeholder="Confirm your new password" 
            placeholderTextColor='#adadad'
            selectionColor='gray'
            status='warning'
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
            label="Password confirmation"
            ref={passwordConfirmation}
            secureTextEntry={secureTextEntryTwo}
            accessoryRight={renderIconsTwo}
            returnKeyType='done'
            onFocus={() => toggleSecureEntryTwo()}
            onBlur={() => {
                toggleSecureEntryTwo();
                formHandler();
            }}
            size="large" />
        {/* Button section */}
        {
            !isActive
            ? (
                <Button 
                    size='large' 
                    status='primary'
                    onPress={() => formHandler()}
                    style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Change Password</Button>
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
        width: height >= 660 ? width * 0.45 : width * 0.6,
        height: height * 0.07
    },
})

export default ChangePasswordContents;