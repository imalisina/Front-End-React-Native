import { Text, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';

// UI's
import { Layout } from '@ui-kitten/components'
import tw from 'twrnc';

// Bottom Sheet
import BottomSheet from 'react-native-simple-bottom-sheet';

function CountryLists() {
  
    return (
      <View style={tw.style('')}>
        <BottomSheet wrapperStyle={styles.bsheet} sliderMinHeight={0} isOpen={false}>
          <Text>Some random content</Text>
        </BottomSheet>
      </View>
    );
  }

const styles = StyleSheet.create({
    bsheet: {
        backgroundColor: '#eee',
    }
});

export default CountryLists;