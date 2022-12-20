import { StyleSheet, Dimensions, ActivityIndicator, Platform } from 'react-native';

// Hook
import { useState, useRef } from 'react';

// UI
import tw from 'twrnc';
import { Layout, Input, Button, Select, SelectItem } from '@ui-kitten/components';

// Get device dimension
const { height, width } = Dimensions.get('window');

// Ethnicity options
const ethnicityData = [
    "White",
    "Black",
    "Middle East",
    "Asian",
    "Indians",
    "Latino",
    "Others"
];

// Favourite style options
const favStyleData = [
    "Casual",
    "Elegant (Formal)",
    "Wedding",
    "Swimwear",
    "Sport",
    "Sexy"
];

// Gender options
const genderData = [
    "Male",
    "Female",
    "LGBT"
];

const ProfileStepOneContents = () => {
    // Button activation state and its toggle method
    const [ isActive, setIsActive ] = useState(false);
    // Method to change the button activation status and redirect user to next step
    const formHandler = () => {
        setIsActive(true);
        // FORM HANDLING SECTION GOES HERE ...
    }
    // State for select menu
    const [ ethnicityIndex, setEthnicityIndex ] = useState([]);
    const [ favStyleIndex, setFavStyleIndex ] = useState([]);
    const [ genderIndex, setGenderIndex ] = useState([]);
    // Reference to move to the next input
    const genderRef = useRef();
    const ethnicityRef = useRef();
    const favStyleRef = useRef();
    const weightRef = useRef();
    const heightRef = useRef();
    // Generate the string value of selected option/options
    const getSelectedValue = ( selectedIndexPaths, options ) => {
        if ( selectedIndexPaths.length ) {
            return selectedIndexPaths.map((indexPath) => options[indexPath.row]).join();
        } else {
            return options[selectedIndexPaths.row];
        }
    };
    
    return (
        <>
        {/* Double inputs section */}
        <Layout style={[styles.doubleInputContainer, tw.style('mx-auto')]}>
            <Input 
                label="Birthday"
                placeholder="mm/dd/yyyy"
                style={[tw.style('mx-auto'), styles.doubeInputStyles]}
                size="large"
                selectionColor='gray'
                onSubmitEditing={() => {
                    genderRef.current.focus();
                }}
                placeholderTextColor="#adadad"
                returnKeyType='next'
                keyboardType="numbers-and-punctuation"
                status='warning' />
            <Select 
                label="Gender"
                placeholder="- Select -"
                selectedIndex={genderIndex}
                onSelect={setGenderIndex}
                value={getSelectedValue(genderIndex, genderData)}
                ref={genderRef}
                onBlur={() => {
                    ethnicityRef.current.focus();
                }}
                style={[tw.style('mx-auto'), styles.doubeInputStyles]}
                size='large'
                status="warning">
                {/* Printing SelectItem options */}
                {
                    genderData.map((data, index) => (
                        <SelectItem title={data} key={index} />
                    ))
                }
            </Select>
        </Layout>
        {/* Select section */}

        <Select 
            label="Ethnicity"
            placeholder="Select your ethnicity"
            selectedIndex={ethnicityIndex}
            onSelect={setEthnicityIndex}
            value={getSelectedValue(ethnicityIndex, ethnicityData)}
            ref={ethnicityRef}
            style={[tw.style('mx-auto'), styles.inputStyles]}
            size="large"
            placeholderTextColor='#adadad'
            onBlur={() => {
                favStyleRef.current.focus();
            }}
            status='warning'>
            {/* Printing SelectItem options */}
            {
                ethnicityData.map((data, index) => (
                    <SelectItem title={data} key={index} />                    
                ))
            }
        </Select>
        <Select
            label="Favourite style"
            placeholder="Select favourite style(s)"
            multiSelect={true}
            selectedIndex={favStyleIndex}
            onSelect={setFavStyleIndex}
            value={getSelectedValue(favStyleIndex, favStyleData)}
            ref={favStyleRef}
            onBlur={() => {
                weightRef.current.focus();
            }}
            style={[tw.style('mx-auto'), styles.inputStyles]}
            size="large"
            placeholderTextColor="#adadad"
            status='warning'>
            {/* Printing SelectItem options */}
            {
                favStyleData.map((data, index) => (
                    <SelectItem title={data} key={index}/>
                ))
            }
        </Select>

        {/* Double inputs section */}
        <Layout style={[styles.doubleInputContainer, tw.style('mx-auto')]}>
            <Input 
                label="Weight (kg)"
                placeholder="Example: 80"
                style={[tw.style('mx-auto'), styles.doubeInputStyles]}
                size="large"
                placeholderTextColor="#adadad"
                returnKeyType='next'
                selectionColor='gray'
                ref={weightRef}
                onSubmitEditing={() => {
                    heightRef.current.focus();
                }}
                blurOnSubmit={false}
                keyboardType={Platform.OS == "android" ? "phone-pad" : "numbers-and-punctuation"}
                status='warning' />
            <Input 
                label="Height (cm)"
                placeholder="Example: 180"
                style={[tw.style('mx-auto'), styles.doubeInputStyles]}
                size="large"
                ref={heightRef}
                placeholderTextColor="#adadad"
                returnKeyType='done'
                selectionColor='gray'
                onBlur={() => formHandler()}
                keyboardType={Platform.OS == "android" ? "phone-pad" : "numbers-and-punctuation"}
                status='warning' />
        </Layout>
        {/* Button section */}
        {
            !isActive
            ? (
                <Layout style={[styles.doubleButtonContainer, tw.style('mx-auto')]}>
                    <Button 
                        size='large' 
                        status='primary'
                        onPress={() => formHandler()}
                        style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Next</Button>
                    <Button 
                        size='large' 
                        status='info'
                        onPress={() => formHandler()}
                        style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Skip now</Button>
                </Layout>
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

export default ProfileStepOneContents;