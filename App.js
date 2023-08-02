import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { useFonts } from 'expo-font';

import { Home } from './screens/mainScreens/Home';
import { LoginScreen } from './screens/authSreens/LoginScreen';
import { RegistrationScreen } from './screens/authSreens/RegistrationScreen';
import { store, persistor } from './redux/store';
import { auth } from './config';

const MainStack = createStackNavigator();

export default function App() {
  const [initialRouteName, setInitialRouteName] = useState(null);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) =>
      setInitialRouteName(user ? 'Home' : 'Login')
    );
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    initialRouteName && (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <NavigationContainer>
              <MainStack.Navigator initialRouteName={initialRouteName}>
                <MainStack.Screen
                  name="Registration"
                  component={RegistrationScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <MainStack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <MainStack.Screen
                  name="Home"
                  component={Home}
                  options={{
                    headerShown: false,
                  }}
                />
              </MainStack.Navigator>
            </NavigationContainer>
          </View>
        </PersistGate>
      </Provider>
    )
  );
}
