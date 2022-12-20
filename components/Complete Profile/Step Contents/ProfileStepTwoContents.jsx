import { StyleSheet, Dimensions, ActivityIndicator, Platform, TouchableOpacity } from 'react-native';

// Hook
import { useState, useRef } from 'react';

// Icon
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

// UI
import tw from 'twrnc';
import { Layout, Input, Button, Icon } from '@ui-kitten/components';

// Get device dimension
const { height, width } = Dimensions.get('window');

const ProfileStepTwoContents = () => {
    // Button activation state and its toggle method
    const [ isActive, setIsActive ] = useState(false);
    const [ addressFocused, setAddressFocused ] = useState(false);
    // Reference to move to the next input
    const zipCodeRef = useRef();
    const occupationRef = useRef();
    const addressRef = useRef();

    return (
        <>
        {/* Double inputs section*/}
        <Layout style={[styles.doubleInputContainer, tw.style('mx-auto')]}>
            <Input 
                label="City"
                placeholder='Enter your city'
                style={[tw.style('mx-auto'), styles.doubeInputStyles]}
                size="large"
                selectionColor='gray'
                keyboardType="default"
                onSubmitEditing={() => {
                    zipCodeRef.current.focus();
                }}
                blurOnSubmit={false}
                status='warning' />
            <Input 
                label="ZIP / Postal code"
                placeholder='Enter your ZIP'
                style={[tw.style('mx-auto'), styles.doubeInputStyles]}
                size="large"
                ref={zipCodeRef}
                selectionColor='gray'
                keyboardType={Platform.OS === "android" ? "default" : "numbers-and-punctuation"}
                status='warning' />
        </Layout>
        
        <Input 
            label="Address"
            placeholder='Enter / Share your location'
            multiline
            selectionColor='gray'
            numberOfLines={3}
            size="large"
            onFocus={() => setAddressFocused(true)}
            onBlur={() => {
                setAddressFocused(false);
                setIsActive(true);
            }}
            accessoryRight={
                !addressFocused
                ? (
                    <TouchableOpacity onPress={() => console.log('icon is pressed!')}>
                        <FontAwesome5 name="map-marker-alt" size={22} color="#171818" />
                    </TouchableOpacity>
                ) : ""
            }
            scrollEnabled={true}
            placeholderTextColor='#adadad'
            status='warning'
            style={[tw.style('mx-auto'), styles.inputStyles]}
        />
        </>
    );
}

const styles = StyleSheet.create({
    inputStyles: {
        width: '90%',
        marginVertical: '2.5%',
    },
    doubleInputContainer: {
        width: '90%',
        flexDirection: 'row'
    },
    doubleButtonContainer: {
        width: '90%',
        flexDirection: 'row'
    },
    doubeInputStyles: {
        width: '48%',
        marginVertical: '2.5%',
    },
    buttonStyle: {
        width: width * 0.35,
        height: height * 0.07,
    },
})

export default ProfileStepTwoContents;