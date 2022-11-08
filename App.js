import { View } from 'react-native';
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
import tw from 'twrnc';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// Application Screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

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
              {/* <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreen}
                options={{ headerShown: false }} /> */}
              {/* Login Screen Route */}
              <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={HeaderOptions} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
          </ApplicationProvider>
      </Provider>
  );
}

export default App;