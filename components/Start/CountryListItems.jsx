// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setToggle } from '../../redux/WelcomePageToggle/actions';
import { getSelectedCountry } from '../../redux/CountriesList/actions'; 

// UI's
import tw from 'twrnc';
import { Text, Divider, Layout } from '@ui-kitten/components';
import { View, Image, FlatList, Pressable } from 'react-native';

const CountryListItems = () => {
    // Redux Operations
    const { countryData } = useSelector((state) => state.countryDataReducer);
    const dispatch = useDispatch();

    // onPress Event Handler Method
    /**
    * When user selects a country, application will get the selected country
    * and set toggleStatus on false to close the modal
    */
    const selectedCountryEventHandler = ( selectedCountry ) => {
        dispatch(setToggle());
        dispatch(getSelectedCountry(selectedCountry))
    } 


    const Item = ({ title, flag, alphaCode }) => (
        <View>
            <Pressable onPress={() => selectedCountryEventHandler(title)}>
                <View style={tw.style('w-full flex flex-row justify-between my-3')}>
                    <Layout style={tw.style('ml-3')}>
                        <Text>{title}</Text>
                        <Text style={tw.style('text-zinc-400 text-xs')}>{alphaCode}</Text>
                    </Layout>
                    <Image source={{ uri: flag }} style={tw.style('w-12 h-10 rounded-md border border-zinc-100 mr-3')}/>
                </View>
                <Divider />
            </Pressable>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.name} flag={item.flags} alphaCode={item.alpha2Code} />
      );

    return (
        <Layout>
            <Text category="h2" style={tw.style('mt-9 mb-3 ml-2')}>Select Your Country</Text>
            <FlatList
            style={tw.style('mt-4 mb-22')}
            data={countryData}
            renderItem={renderItem}
            key={Math.random()} />
        </Layout>
    )
}

export default CountryListItems;