import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../main/Welcome';
import Otp from '../main/Otp';
import Splash from '../main/Splash';
import UserName from '../main/UserName';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />

      <Stack.Screen
        name="UserName"
        component={UserName}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Auth;
