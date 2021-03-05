import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setCustomText } from 'react-native-global-props';

import Routes from './src/config/Routes';
import string from './src/config/app';
import { StatusBar, View, StyleSheet, Text } from 'react-native';



setCustomText({ fontFamily: 'CircularStdBook' })
const Stack = createStackNavigator();
export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <StatusBar
          barStyle="light-content" />
        <NavigationContainer  >
          <Stack.Navigator headerMode="none" initialRouteName="Home">
            {Routes.map((route, index) => <Stack.Screen options={{

              headerStyle: {
                backgroundColor: '#2273f5',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              title: string.AppName
            }} {...route} key={index} />)}
          </Stack.Navigator>
        </NavigationContainer>
      </React.Fragment >
    );
  }

}
