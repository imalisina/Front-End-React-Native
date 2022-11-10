import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// UI's
import tw from 'twrnc';
import { Input, Text } from '@ui-kitten/components';

// Get device dimension
const { height } = Dimensions.get('window');

const Inputs = () => {
    return (
        <>
        <Input
            placeholder="Enter your email" 
            placeholderTextColor='#9ca3af'
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Email"
            size="large" />
        <Input 
            placeholder="Enter your password" 
            placeholderTextColor='#9ca3af'
            secureTextEntry={true}
            selectionColor='gray' 
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.inputStyles]}
            label="Password"
            caption={<TouchableOpacity activeOpacity={0.4}><Text style={[styles.linkNoteStyle, tw.style('text-zinc-400')]}>Forget your password ?</Text></TouchableOpacity>}
            size="large" />
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
        fontSize: height * 0.0155,
    }
})

export default Inputs;