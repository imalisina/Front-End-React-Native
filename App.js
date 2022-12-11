// Expo package
import { StatusBar } from 'expo-status-bar';

// Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';

// Navigation v6
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigation header
import HeaderOptions from './components/Header/HeaderOptions';

// UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// Application screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';

const App = () => {
  // Stack navigator creator
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            {/* Welcome screen route */}
            {/* <Stack.Screen 
              name="Welcome" 
              component={WelcomeScreen}
              options={{ headerShown: false }} /> */}
            {/* Login screen route */}
            {/* <Stack.Screen 
              name="Login"
              component={LoginScreen}
              options={HeaderOptions} /> */}
            {/* Register screen route */}
            {/* <Stack.Screen 
              name="Register"
              component={RegisterScreen} 
              options={HeaderOptions} /> */}
            {/* Forget passowrd route */}
            <Stack.Screen 
              name="ForgetPassword"
              component={ForgetPasswordScreen}
              options={HeaderOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;