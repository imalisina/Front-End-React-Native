import { StatusBar } from 'expo-status-bar';

// Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';

// Navigation v6
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigation Header
import HeaderOptions from './components/Header/HeaderOptions';

// UI's
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// Application Screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen.jsx';

const App = () => {
  // Stack Navigator Creator
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            {/* Welcome Screen Route */}
            <Stack.Screen 
              name="Welcome" 
              component={WelcomeScreen}
              options={{ headerShown: false }} />
            {/* Login Screen Route */}
            <Stack.Screen 
              name="Login"
              component={LoginScreen}
              options={HeaderOptions} />
            {/* Register Screen Route */}
            <Stack.Screen 
              name="Register"
              component={RegisterScreen} 
              options={HeaderOptions} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;