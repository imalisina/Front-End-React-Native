
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


const ProfileStepOneContents = ({ navigation }) => {
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
            // console.log(selectedIndexPaths.map((indexPath) => options[indexPath.row]));
            return selectedIndexPaths.map((indexPath) => options[indexPath.row]).join();
        } else {
            // console.log(options[selectedIndexPaths.row]);
            return options[selectedIndexPaths.row];
        }
    };
    
    return (
        <>
        {/* Double inputs section */}
        <Layout style={[styles.doubleInputContainer, tw.style('mx-auto')]}>
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
                style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
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
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
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
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
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
                style={[tw.style('mx-auto bg-transparent'), styles.doubeInputStyles]}
                size="large"
                placeholderTextColor="#adadad"
                returnKeyType='next'
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
                style={[tw.style('mx-auto bg-transparent'), styles.doubeInputStyles]}
                size="large"
                ref={heightRef}
                placeholderTextColor="#adadad"
                returnKeyType='done'
                keyboardType={Platform.OS == "android" ? "phone-pad" : "numbers-and-punctuation"}
                status='warning' />
        </Layout>
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
        flex: 1,
        flexDirection: 'row'
    },
    doubeInputStyles: {
        width: '48%',
        marginVertical: '2.5%',
    },
    buttonStyle: {
        width: width * 0.35,
        height: height * 0.07
    },
})

export default ProfileStepOneContents;