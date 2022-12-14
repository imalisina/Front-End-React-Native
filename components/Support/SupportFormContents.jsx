import { StyleSheet, Text, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';

// Hook
import { useState, useRef } from 'react';

// Icon
import { FontAwesome5 } from '@expo/vector-icons';

// UI
import tw from 'twrnc';
import { 
    Input, 
    Text as UIText, 
    Button, 
    IndexPath, 
    Select, 
    SelectItem } from '@ui-kitten/components';

// Get device dimension
const { fontScale, height, width } = Dimensions.get('window');


const staticValues = [
    'Question',
    'Account and passwords',
    'Technical issue',
    'Suggestion',
    'Others'
];

const SupportFormContents = () => {
    // Create state for select menu
    const [ selectedIndex, setSelectedIndex ] = useState();
    // Display value in select menu
    return (
        <>
        {/* Input section */}
        <Select 
            // label="Subject / Reason"
            placeholder="- Select -"
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            style={[tw.style('mx-auto bg-transparent'), styles.inputStyles]}
            size="large"
            value={selectedIndex ? staticValues[selectedIndex.row] : ''}
            placeholderTextColor='#9ca3af'>
            <SelectItem title="Question" />
            <SelectItem title="Account and passwords" />
            <SelectItem title="Technical issue" />
            <SelectItem title="Suggestion" />
            <SelectItem title="Others" />
        </Select>
        {/* Button section */}
        </>
    );
}

const styles = StyleSheet.create({
    inputStyles: {
        width: '90%',
        marginVertical: '2.5%',
    },
});

export default SupportFormContents;