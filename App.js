import { StatusBar } from 'expo-status-bar';

// Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';

// UI's
import tw from 'twrnc';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

// Application Screens
import WelcomePageContainer from './screens/WelcomeScreen';
import { View } from 'react-native';

const App = () => {
  return (
    <Provider store={Store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <View style={tw.style('h-full')}>
            <StatusBar />
            <WelcomePageContainer />
          </View>
        </ApplicationProvider>
    </Provider>
  );
}

export default App;
