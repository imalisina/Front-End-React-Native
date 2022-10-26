import { Platform, StyleSheet, Pressable } from 'react-native';

// UI's
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Input } from '@ui-kitten/components';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setToggle } from '../../redux/WelcomePageToggle/actions';


const SelectCountry = () => {  
  // Redux Operations
  const { selectedCountryData } = useSelector((state) => state.countryDataReducer)
  const dispatch = useDispatch();
  // Changing the status of toggle by clicking on the input
  const changeToggleStatus = () => {
    dispatch(setToggle());
  }
  // Changing placeholder of the input
  function changeInputPlaceholder () {
    if ( selectedCountryData.name !== undefined ) {
      return selectedCountryData.name
    } else {
      return "Select your country"
    }
  }

  return (
      <Pressable onTouchStart={() => changeToggleStatus()} style={styles.SelectCountryinput}>
        <Input 
          placeholder={changeInputPlaceholder()}
          style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.Input]} 
          placeholderTextColor='#9ca3af'
          selectionColor='gray'
          disabled 
          size="large"
          textStyle={Platform.OS === 'ios' ? styles.textStylesIOS : tw.style('text-lg py-2')}
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
  },
  textStylesIOS: {
    paddingTop: '2%',
    paddingBottom: '2%',
    fontSize: '17%'
  }
});

export default SelectCountry;