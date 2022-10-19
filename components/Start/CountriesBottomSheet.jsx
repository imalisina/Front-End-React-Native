import BottomSheet from 'react-native-simple-bottom-sheet';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useRef } from 'react';

function CountriesBottomSheet() {
  const panelRef = useRef(null);

  return (
    <View style={{flex: 1}}>
      <BottomSheet sliderMinHeight={0} sliderMaxHeight={800} wrapperStyle={styles.bsheet} isOpen>
        {(onScrollEndDrag) => (
          <ScrollView showsVerticalScrollIndicator={false} onScrollEndDrag={onScrollEndDrag}>
            {[...Array(30)].map((_, index) => (
              <View key={`${index}`} style={styles.listItem}>
                <Text>{`List Item ${index + 1}`}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  bsheet: {
    backgroundColor: '#eee',
  }
})

export default CountriesBottomSheet;

