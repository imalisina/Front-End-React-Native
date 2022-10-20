// UI's
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Input, Layout } from '@ui-kitten/components';

// Redux
import { useDispatch } from 'react-redux';
import { setToggle } from '../../redux/WelcomePageToggle/actions';


const SelectCountry = () => {  
  // Redux Operations
  const dispatch = useDispatch();
  // Changing the status of toggle by clicking on the input
  const changeToggleStatus = () => {
    dispatch(setToggle());
  }

  return (
      <Layout onTouchStart={() => changeToggleStatus()} style={tw.style('mt-40')}>
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