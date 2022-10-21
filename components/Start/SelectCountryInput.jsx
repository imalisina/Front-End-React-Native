import { StyleSheet, Pressable } from 'react-native';

// UI's
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Input } from '@ui-kitten/components';

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
      <Pressable onTouchStart={() => changeToggleStatus()} style={styles.SelectCountryinput}>
        <Input
            style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.Input]}
            textStyle={tw.style('text-lg py-2')}
            placeholder='Select your country'
            placeholderTextColor='#9ca3af'
            selectionColor='gray'
            disabled
            size='large'
            accessoryRight={<MaterialIcons name="keyboard-arrow-down" size={24} color='#9ca3af' />}/>
      </Pressable>
    )
};

const styles = StyleSheet.create({
  SelectCountryinput: {
    marginTop: '37%'
  },
  Input: {
    width: '87%'
  }
});

export default SelectCountry;