import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'; // Import your Home component
import Categories from './screens/Categories';
import Notifications from './screens/Notifications';
import Cart from './screens/Cart';
import Accounts from './screens/Accounts';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Notifications' component={Notifications} />
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='Accounts' component={Accounts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}