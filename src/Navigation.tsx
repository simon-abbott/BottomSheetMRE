import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {MainScreen} from './MainScreen';
import {SecondScreen} from './SecondScreen';

const BaseStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackRoutes = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name={'Primary'}
        component={MainScreen}
        options={{animationEnabled: true}}
      />
      <MainStack.Screen
        name={'Secondary'}
        component={SecondScreen}
        options={{animationEnabled: false}}
      />
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BaseStack.Navigator screenOptions={{headerShown: false}}>
        <BaseStack.Screen name={'MainStack'} component={MainStackRoutes} />
      </BaseStack.Navigator>
    </NavigationContainer>
  );
};

export {AppNavigator};
