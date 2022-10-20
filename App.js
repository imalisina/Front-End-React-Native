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

const App = () => {
  return (
    <Provider store={Store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Layout style={tw.style('h-full')}>
            <StatusBar />
            <WelcomePageContainer />
          </Layout>
        </ApplicationProvider>
    </Provider>
  );
}

export default App;
