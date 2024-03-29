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

// Theme
import {default as theme} from './assets/custom-theme.json'

// Application screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import NeedHelpScreen from './screens/NeedHelpScreen';
import EmailMethodScreen from './screens/EmailMethodScreen';
import VerificationScreen from './screens/VerificationScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import SecureCodeMethodScreen from './screens/SecureCodeMethodScreen';
import SuccessScreen from './screens/SuccessScreen';
import CompleteProfileScreen from './screens/CompleteProfileScreen';


const App = () => {
  // Stack navigator creator
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
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

            {/* Complete profile route */}
            <Stack.Screen 
              name="CompleteProfile" 
              component={CompleteProfileScreen}
              options={HeaderOptions} />

            {/* Forget passowrd route */}
            {/* <Stack.Screen 
              name="ForgetPassword"
              component={ForgetPasswordScreen}
              options={HeaderOptions} /> */}

            {/* Email method route */}
            {/* <Stack.Screen 
              name="EmailMethod"
              component={EmailMethodScreen}
              options={HeaderOptions} /> */}

            {/* SecureCode method route */}
            {/* <Stack.Screen 
              name="SecureCodeMethod"
              component={SecureCodeMethodScreen}
              options={HeaderOptions} /> */}

            {/* Verification route */}
            {/* <Stack.Screen 
              name="Verification"
              component={VerificationScreen}
              options={HeaderOptions} /> */}

            {/* Change password route */}
            {/* <Stack.Screen 
              name="ChangePassword"
              component={ChangePasswordScreen}
              options={HeaderOptions} /> */}

            {/* Success route */}
            {/* <Stack.Screen 
              name="Success"
              component={SuccessScreen}
              options={HeaderOptions} /> */}

            {/* Support route */}
            {/* <Stack.Screen 
              name="NeedHelp"
              component={NeedHelpScreen}
              options={HeaderOptions} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;