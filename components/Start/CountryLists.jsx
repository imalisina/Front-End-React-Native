import { useEffect } from 'react';

// UI's
import { Layout, Text } from '@ui-kitten/components'

// Bottom Sheet
import BottomSheet from 'react-native-simple-bottom-sheet';

function CountryLists() {
    return (
      <Layout>
        <BottomSheet sliderMinHeight={0}>
          <Text>Some random content</Text>
        </BottomSheet>
      </Layout>
    );
  }


export default CountryLists;