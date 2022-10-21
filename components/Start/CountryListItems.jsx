// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setToggle } from '../../redux/WelcomePageToggle/actions';

// UI's
import { Divider, Layout } from '@ui-kitten/components';
import { Text, View, TouchableOpacity, Image, ScrollView, FlatList, Pressable, Button } from 'react-native';

const CountryListItems = () => {
    // Redux Operations
    const { countryData } = useSelector((state) => state.countryDataReducer);
    const dispatch = useDispatch();

    const Item = ({ title, flag }) => (
        <TouchableOpacity activeOpacity={0.3} onPress={() => dispatch(setToggle())}>
            <Text>{title}</Text>
            <Image source={{uri: flag}} style={{width: 50, height: 50}} />
            <Divider />
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => (
        <Item title={item.name} flag={item.flags}/>
      );

    return (
        <Layout>
            {
                <FlatList 
                data={countryData}
                renderItem={renderItem}
                key={Math.random()} />
            }
        </Layout>
    )
}

export default CountryListItems;