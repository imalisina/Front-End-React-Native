import { StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Hook
import { useState } from 'react';

// Icon
import { Entypo } from '@expo/vector-icons';

// UI
import tw from 'twrnc';
import { Input } from '@ui-kitten/components';

// Get device dimension
const { fontScale } = Dimensions.get('window');

const RegisterInputs = () => {
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
        <Input
            placeholder="Enter your full name" 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Name"
            size="large" />
        <Input
            placeholder="Enter your email" 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Email"
            size="large" />
        <Input 
            placeholder={"(+" + selectedCountryData.callingCodes + ") XXX-XXX-XXX"} 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Phone number"
            size="large" />
        <Input
            placeholder="Enter a secure password" 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Password"
            secureTextEntry={secureTextEntry}
            accessoryRight={renderIcons}
            size='large'/>
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
    }
})

export default RegisterInputs;