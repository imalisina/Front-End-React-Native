import { StyleSheet } from 'react-native';

// UI's
import tw from 'twrnc';
import { Input } from '@ui-kitten/components';

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
            size="large" />
        </>
    );
}

const styles = StyleSheet.create({
    inputStyles: {
        width: '90%',
        marginVertical: '2.5%'
    },
})

export default Inputs;