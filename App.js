import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/DetailsScreen';
import HomeScreen from './components/HomeScreen';
import ButtonsScreen from './components/ButtonsScreen';
import TabsScreen from './components/TabsScreen';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Buttons" component={ButtonsScreen} />
          <Stack.Screen name="Tabs" component={TabsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;