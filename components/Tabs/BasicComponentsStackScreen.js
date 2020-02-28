import * as React from 'react';
import DetailsScreen from '../DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { BasicComponentsScreen } from './BasicComponentsScreen';


const SettingsStack = createStackNavigator();

function BasicComponentsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="BasicComponents" component={BasicComponentsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

export default BasicComponentsStackScreen;