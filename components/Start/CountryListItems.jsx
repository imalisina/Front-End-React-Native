// Redux
import { useSelector } from 'react-redux';

// UI's
import { Divider } from '@ui-kitten/components';
import { Text, View, TouchableOpacity } from 'react-native';

const CountryListItems = () => {
    // Redux Operations
    const { countryData } = useSelector((state) => state.countryDataReducer);
    
    return (
        <View>
            {countryData.map((country, index) => (
                <View key={index + Math.random()}>
                    <TouchableOpacity activeOpacity={0.3} onPress={() => console.log('active a function to get selected country details')}>
                        <Text>{country.name}</Text>
                    </TouchableOpacity>
                    <Divider />
                </View>
                ))}
        </View>
    )
}

export default CountryListItems;