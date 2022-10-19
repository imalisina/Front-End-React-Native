import { StatusBar } from 'expo-status-bar';

// UI's
import tw from 'twrnc';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

// Import Other Components
import WelcomePageContainer from './components/Start/WelcomePageContainer';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={tw.style('h-full')}>
        <StatusBar />
        <WelcomePageContainer />
      </Layout>
    </ApplicationProvider>
  );
}

export default App;
