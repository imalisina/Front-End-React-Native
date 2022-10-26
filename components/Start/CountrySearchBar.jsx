import { StyleSheet } from 'react-native';

// UI's
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Input, Layout } from '@ui-kitten/components';

const CountrySearchBar = () => {   
    return (
        <Layout>
            <Input 
                placeholder='Search your country'
                placeholderTextColor='#9ca3af'
                selectionColor='gray' 
                size='large'
                style={[tw.style('mx-auto border border-gray-300 bg-transparent'), styles.searchInput]}
                accessoryRight={<MaterialIcons name="search" size={24} color='#9ca3af' />} />
        </Layout>
    );
}

const styles = StyleSheet.create({
    searchInput: {
        width: '94%'
    }
})

export default CountrySearchBar;