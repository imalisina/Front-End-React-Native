import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';

// UI's
import tw from 'twrnc';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// Application Screens
import WelcomePageContainer from './screens/WelcomeScreen';

const App = () => {
  return (
      <Provider store={Store}>
          <ApplicationProvider {...eva} theme={eva.light}>
          {/* <ApplicationProvider {...eva} theme={eva.dark}> */}
            <View style={tw.style('h-full')}>
              <StatusBar />
              <WelcomePageContainer />
            </View>
          </ApplicationProvider>
      </Provider>
  );
}

export default App;
