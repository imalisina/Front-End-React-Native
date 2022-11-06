import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';

// Navigation v6
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigation Header
import HeaderContainer from './components/Header/HeaderContainer';

// UI's
import tw from 'twrnc';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// Application Screens
import WelcomePageContainer from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

// Initialize the header
const ApplicationHeader = () => <HeaderContainer />;

const App = () => {
  // Stack Navigator Creator
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
          <ApplicationProvider {...eva} theme={eva.light}>
          {/* <ApplicationProvider {...eva} theme={eva.dark}> */}
          <View style={tw.style('h-full')}>
          <StatusBar />
          <NavigationContainer>
            <Stack.Navigator>
              {/* Welcome Screen Route */}
              <Stack.Screen 
                name="Welcome" 
                component={WelcomePageContainer}
                options={{ headerShown: false }} />
              {/* Login Screen Route */}
              <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: true, 
                  headerShadowVisible: false,
                  headerTitle : ApplicationHeader 
                }} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
          </ApplicationProvider>
      </Provider>
  );
}

export default App;