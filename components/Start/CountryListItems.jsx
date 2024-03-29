// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setToggle } from '../../redux/WelcomePageToggle/actions';
import { getSelectedCountry } from '../../redux/CountriesList/actions'; 

// UI
import tw from 'twrnc';
import { Text, Divider, Layout } from '@ui-kitten/components';
import { View, Image, FlatList, Pressable } from 'react-native';

const CountryListItems = () => {
    // Redux Operations
    const { countryData } = useSelector((state) => state.countryDataReducer);
    const { navigationProperty } = useSelector((state) => state.navigatorReducer)
    const dispatch = useDispatch();

    /*
    * Setting the selected country and sending status to welcome page
    * to close the country list modal and redirect user to login page
    */
    const selectedCountryEventHandler = ( selectedCountry ) => {
        dispatch(setToggle());
        dispatch(getSelectedCountry(selectedCountry));
        navigationProperty.navigate('Login');
    } 

    /*
    * Loops through country list and display each country with details
    */
    const Item = ({ title, flag, alphaCode }) => (
        <View>
            <Pressable onPress={() => selectedCountryEventHandler(title)}>
                <View style={tw.style('w-full flex flex-row justify-between my-3')}>
                    <Layout style={tw.style('ml-5')}>
                        <Text>{title}</Text>
                        <Text status='warning' style={tw.style('text-xs')}>{alphaCode}</Text>
                    </Layout>
                    <Image source={{ uri: flag }} style={tw.style('w-12 h-10 rounded-md border border-zinc-100 mr-5')}/>
                </View>
                <Divider />
            </Pressable>
        </View>
      );

      // render each country as an item and pass them to main flat list
      const renderItem = ({ item }) => (
        <Item title={item.name} flag={item.flags} alphaCode={item.alpha2Code} />
      );

    return (
        <Layout>
            <Text category="h1" style={tw.style('mt-6 mb-4 ml-3')}>Select Your Country</Text>
            <FlatList
            style={tw.style('mt-4 mb-22')}
            data={countryData}
            renderItem={renderItem}
            key={Math.random()} />
        </Layout>
    )
}

export default CountryListItems;