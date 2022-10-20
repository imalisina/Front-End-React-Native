import { View } from 'react-native';

// UI's
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Input, Layout } from '@ui-kitten/components';

// Main Select Language Component
const SelectCountry = () => {  
  return (
      <Layout onTouchStart={() => console.log('should replace redux')} style={tw.style('mt-40')}>
        <Input
            style={tw.style('w-88 mx-auto border border-gray-300 bg-transparent')}
            textStyle={tw.style('text-lg py-2')}
            placeholder='Select your country'
            placeholderTextColor='#9ca3af'
            selectionColor='gray'
            disabled
            size='large'
            accessoryRight={<MaterialIcons name="keyboard-arrow-down" size={24} color='#9ca3af' />}/>
      </Layout>
    )
};

export default SelectCountry;