import { StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Text } from 'react-native';

// Hook
import { useState, useRef } from 'react';

// UI
import tw from 'twrnc';
import { Input, Text as UIText, Button, Select, SelectItem } from '@ui-kitten/components';

// Get device dimension
const { fontScale, height, width } = Dimensions.get('window');


const topicListData = [
    'Question',
    'Account and passwords',
    'Technical issue',
    'Suggestion',
    'Others'
];

const SupportFormContents = ({ navigation }) => {
    // Reference to move to the next input
    const descriptionRef = useRef();
    // Button activation state and its toggle method
    const [ isActive, setIsActive ] = useState(false);
    // State for select menu
    const [ topicIndex, setTopicIndex ] = useState([]);
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
        {/* Input section */}
        <Select 
            label="Subject / Reason"
            placeholder="- Select -"
            selectedIndex={topicIndex}
            onSelect={setTopicIndex}
            value={getSelectedValue(topicIndex, topicListData)}
            style={[tw.style('mx-auto'), styles.inputStyles]}
            size="large"
            placeholderTextColor='#adadad'
            onBlur={() => {
                descriptionRef.current.focus();
            }}
            status='warning'>
            {
                topicListData.map((data, index) => (
                    <SelectItem title={data} key={index} />
                ))
            }
        </Select>
        <Input 
            label="Description"
            ref={descriptionRef}
            onBlur={() => setIsActive(true)}
            placeholder='Write your description . . .'
            multiline
            selectionColor='gray'
            caption={
                <UIText status='warning' style={styles.linkNoteStyle}>Maximum 400 characters</UIText>
            }
            numberOfLines={15}
            maxLength={400}
            scrollEnabled={true}
            placeholderTextColor='#adadad'
            status='warning'
            style={[tw.style('mx-auto'), styles.inputStyles]}
        />
        {/* Button section */}
        {
            !isActive
            ? (
                <Button 
                    size='large' 
                    status='primary'
                    onPress={() => setIsActive(true)}
                    style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]}>Get Help</Button>
            ) : (
                <Button size='large' status='basic' style={[styles.buttonStyle, tw.style('mx-auto mt-4 rounded-lg')]} 
                        accessoryLeft={<ActivityIndicator size="small" color="#DB2C66" />} />
            )
        }
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={tw.style('mb-9')}>
            <UIText status='primary' style={[styles.linkNoteStyle, tw.style('mx-auto mt-2')]}>
                Solved ? <Text style={tw.style("underline font-bold")}>Back</Text>
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
        textDecorationLine: "underline",
        fontSize: 11.3 * fontScale,
    },
    buttonStyle: {
        width: width * 0.35,
        height: height * 0.07
    },
});

export default SupportFormContents;